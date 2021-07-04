from rest_framework import serializers
from .models import DreamJob


class DreamJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = DreamJob
        fields = ('job_title', 'skills_text')
