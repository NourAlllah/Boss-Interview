from .views import DreamJob
from django.urls import path

urlpatterns = [
    path('api/dream_job/', DreamJob.as_view(), name='dream_job'),
]
