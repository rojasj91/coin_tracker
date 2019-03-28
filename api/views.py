import os

from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from coins.models import Alert

from .serializer import AlertSerializer

from .coinmarketcap import do_coin_market

from rest_framework.authentication import SessionAuthentication, BasicAuthentication

class CsrfExempt(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class CoinLatest(APIView):
    def get(self, request, format=None):
        # 2. get the data from #1 into a variable
        coin_tracker = do_coin_market()

        return Response(coin_tracker)

class AlertViewSet(ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (CsrfExempt, BasicAuthentication)

    def get_queryset(self):
        return self.request.user.alerts.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

