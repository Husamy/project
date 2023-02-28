from rest_framework import serializers
from .models import user_timestamp

class Timestampserializer (serializers.ModelSerializer):
    class Meta:
        model = user_timestamp
        fields = ('id' , 'action' , 'email' ,'created_date','created_time') 