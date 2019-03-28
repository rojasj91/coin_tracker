from rest_framework import serializers

from coins.models import Alert

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class AlertSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Alert
        fields = '__all__'
