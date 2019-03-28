from django.db import models

from users.models import User


class Alert(models.Model):
    low_alert = models.IntegerField()
    high_alert = models.IntegerField()
    currency_id = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='alerts')
