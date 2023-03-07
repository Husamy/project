from django.urls import path
from .views import CustomUserApi, PersonalUserAPI
from .views import UserLoginView, UserLogoutView


urlpatterns = [
    path('users/<int:pk>', PersonalUserAPI.as_view()),
    path('users/', CustomUserApi.as_view()),
    path('login/', UserLoginView.as_view()),
    path('logout/', UserLogoutView.as_view()),

]