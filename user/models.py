from django.db import models

class User(models.Model):
    account = models.TextField()
    name = models.TextField()
