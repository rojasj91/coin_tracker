from django.urls import path, include
from rest_framework import routers
from .views import CoinLatest, AlertViewSet


router = routers.SimpleRouter()
router.register('alerts', AlertViewSet)

urlpatterns = router.urls
urlpatterns += [
    path('latest/', CoinLatest.as_view()),
] + router.urls