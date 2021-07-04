from rest_framework import serializers
from .models import RateUs


class RateSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(read_only=True,
                                               view_name='rate-user')

    class Meta:
        model = RateUs
        fields = (
            'user',
            'rate','review',
        )
