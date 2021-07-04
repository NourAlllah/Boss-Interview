from .models import RateUs
from .serializers import RateSerializer
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User


@api_view(
    ["POST"],
)
def rate_us_view(request):
    if request.method == "POST":
        username = request.data.get('username')
        rate = request.data.get('rate')
        review = request.data.get('review')
        count = RateUs.objects.filter(user=User.objects.filter(username=username)[:1])

        if count:
            response_message = {
                "error": "User has already a rate."
            }
            return Response(response_message, status=status.HTTP_400_BAD_REQUEST)

        rate = RateUs(user=username,rate=rate,review=review)
        rate.save()

            
        return Response('saved successfully')