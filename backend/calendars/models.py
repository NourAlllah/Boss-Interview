from django.db import models
from knox.models import AuthToken
from django.utils import timezone as _timezone
from django.contrib.auth.models import User


class Calendar(models.Model):
    """
    Stores info about calendars
    """
    owner = models.CharField(max_length=100,default='')
    start = models.DateTimeField(default=_timezone.now)
    
    def __str__(self):
        return self.owner
