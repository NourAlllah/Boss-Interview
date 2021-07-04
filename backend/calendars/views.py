from .models import Calendar
from .serializers import CalendarSerializer
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from knox.models import AuthToken


@api_view(
    ["POST"],
)
def api_create_calendar_view(request):
    if request.method == "POST":
        user = request.data.get('owner')
        start = request.data.get('start')
        count = Calendar.objects.filter(owner=user).count()

        if count:
            response_message = {
                "error": "duplicate key value violates unique constraint. User has already an appointment."
            }
            return Response(response_message, status=status.HTTP_400_BAD_REQUEST)

        calendar = Calendar(owner=user,start=start)
        calendar.save()
        return Response('saved successfully')
