from django.shortcuts import render

# Create your views here.
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin ,CreateModelMixin
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserLoginSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import logout
from rest_framework.authentication import TokenAuthentication
import requests

class UserLoginView(GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response_data = serializer.validated_data

        return Response(response_data, status=status.HTTP_200_OK)







class UserLogoutView(GenericAPIView):
    def post(self, request, *args, **kwargs):
        try:
            request.user.auth_token.delete()
            logout(request)
        except (AttributeError, ObjectDoesNotExist):
            pass
        return Response({'message': 'Successfully logged out.'})









class CustomUserApi(GenericAPIView, CreateModelMixin, ListModelMixin):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request):
        # Create a new user account
        serializer = CustomUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # Send the user ID and email address to the timestamp microservice
        action = 'created'
        email = serializer.data['email']
        timestamp_data = {'action': action, 'email': email}
        timestamp_url = 'http://192.168.1.15:8000/api/create'
        response = requests.post(timestamp_url, data=timestamp_data)

        # Return a JSON response indicating success
        return Response(serializer.data, status=201)







class PersonalUserAPI(GenericAPIView, RetrieveModelMixin):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

