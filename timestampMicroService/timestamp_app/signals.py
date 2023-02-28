from django.db.models.signals import post_save
from django.contrib.auth.models import User

from authentication.signals import new_account_created
from .models import Timestamp

@receiver(new_account_created)
def create_timestamp_table(sender, user_id, email, **kwargs):
    user = User.objects.get(id=user_id)
    timestamp = Timestamp(user=user)
    timestamp.save()
