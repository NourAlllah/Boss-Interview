from django.contrib import admin
from .models import Interview, Feedback, Question, Answer, SavedFeedback

admin.site.register(Interview)
admin.site.register(Question)
admin.site.register(Feedback)
admin.site.register(Answer)
admin.site.register(SavedFeedback)
