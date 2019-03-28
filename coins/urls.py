from django.urls import path

from .views import HomeView, CheckAlert


urlpatterns = [
    path('', HomeView.as_view(), name = 'home'),
    path('check-alert/', CheckAlert.as_view(), name = 'check-alert'),
]