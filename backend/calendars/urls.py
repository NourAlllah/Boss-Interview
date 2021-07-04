from .views import api_create_calendar_view
from django.urls import path

urlpatterns = [
    path('api/calendar/', api_create_calendar_view, name='calendar'),

]