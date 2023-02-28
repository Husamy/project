'''from django.shortcuts import render
from .serializers import Timestampserializer
from rest_framework import generics
from .models import user_timestamp
# Create your views here.
'''


from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import Timestampserializer
from .models import user_timestamp

class createtimestamp(APIView):
    def post(self, request):
        # Extract the user ID and email address from the request data
        action = request.data.get('action')
        email = request.data.get('email')

        timestamp = user_timestamp.objects.create(action=action, email=email)
        serializer = Timestampserializer(timestamp)

        # Return a JSON response indicating success
        return Response(serializer.data, status=201)


class getimestamp(generics.ListAPIView):
    queryset = user_timestamp.objects.all()
    serializer_class = Timestampserializer