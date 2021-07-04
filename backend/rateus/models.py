from re import M
from django.db import models
from django.contrib.auth.models import User


class RateUs(models.Model):
    user = models.CharField(max_length=100,default='')
    rate = models.IntegerField()
    review=models.TextField(null=True)
    
    def __str__(self):
        return f'{self.user} => {self.rate} => {self.review}'
