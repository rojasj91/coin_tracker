from django.db import models

from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    phone_number = models.CharField(max_length=10)
    email = models.EmailField(_('email address'), unique=True)
    date_of_birth = models.DateField()
    name = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number', 'date_of_birth', 'name']
