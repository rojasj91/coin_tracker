from django.db import models

from django.contrib.auth.models import AbstractBaseUser, UserManager


class User(AbstractBaseUser):
    name = models.CharField(max_length=255)
    email = models.EmailField('email address', unique=True)
    date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=10)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number', 'date_of_birth', 'name']

    objects = UserManager()
