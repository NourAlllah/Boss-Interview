from django.db import models


class DreamJob(models.Model):
    job_title = models.TextField(max_length=50)
    skills_text = models.TextField(max_length=1000, blank=True)
