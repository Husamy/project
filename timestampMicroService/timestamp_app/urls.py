from django.urls import path
from .views import createtimestamp , getimestamp


urlpatterns = [
    path('create', createtimestamp.as_view()),
    path('get', getimestamp.as_view()),
]


