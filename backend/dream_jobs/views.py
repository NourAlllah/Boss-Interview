from rest_framework import generics
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from dream_jobs.models import DreamJob
from dream_jobs.serializers import DreamJobSerializer


class DreamJob(generics.ListAPIView):

    queryset = DreamJob.objects.all()
    serializer_class = DreamJobSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = ('job_title', 'skills_text')
