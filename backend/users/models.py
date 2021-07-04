from django.db import models
from django.contrib.auth.models import User


class Subscribe(models.Model):
    # id = models.IntegerField(null=False, primary_key=True)
    email = models.EmailField(max_length=50)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,)
    avatar = models.ImageField()
