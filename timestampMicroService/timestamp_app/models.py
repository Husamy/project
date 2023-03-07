from django.db import models
from datetime import datetime


# Create your models here.
class user_timestamp(models.Model):
    email = models.EmailField()
    action = models.CharField(max_length=10)
    created_date = models.DateField()
    created_time = models.TimeField()

    def __str__(self) -> str:
        return self.email