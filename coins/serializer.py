from rest_framework.serializers import ModelSerializer

from .models import CoinTracker

class CoinSerializer(ModelSerializer):
    class Meta:
        model = CoinTracker
        fields = '__all__'
