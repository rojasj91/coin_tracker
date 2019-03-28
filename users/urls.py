from django.contrib.auth import views  # LoginView, LogoutView
from django.urls import path, include

from .views import SignupView


app_name = 'users'

urlpatterns = [
    path('signup/', SignupView.as_view(), name="signup"),

    path('login/', views.LoginView.as_view(template_name="login.html"), name="login"),
    path('logout/', views.LogoutView.as_view(template_name="logout.html"), name="logout"),

    path('password_change/', views.PasswordChangeView.as_view(), name='password_change'),
    path('password_change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),

    path('password_reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # path('', include('django.contrib.auth.urls')),
]