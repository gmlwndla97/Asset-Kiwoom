from django.db import models

class Stock(models.Model):
    code = models.TextField()
    name = models.TextField()
