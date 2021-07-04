from .views import rate_us_view
from django.urls import path

urlpatterns = [
    path('api/rate/', rate_us_view, name='rate'),

]