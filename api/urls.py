from django.urls import path, include
from rest_framework import routers
from .views import CoinLatest

router = routers.SimpleRouter()

urlpatterns = router.urls
urlpatterns += [
    path('latest/', CoinLatest.as_view())
]