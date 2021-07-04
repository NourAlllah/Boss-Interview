from rest_framework import serializers
from .models import Calendar


class CalendarSerializer(serializers.HyperlinkedModelSerializer):
    """
    Calendar serializer for admins, allows settings of owners
    """
    owner = serializers.HyperlinkedRelatedField(read_only=True,
                                                view_name='calendar-owner')

    class Meta:
        model = Calendar
        fields = (
            'owner',
            'start'
        )

    # def to_representation(self, instance):
    #     rep = super().to_representation(instance)
    #     if instance.User is None:
    #         rep["owner"] = ""
    #     else:
    #         rep["owner"] = instance.User.username
