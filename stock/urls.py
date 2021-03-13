from django.urls import path
from .views import *

urlpatterns = [
    path('current/', current_stock),
    path('favorite/', favorite_stock),
]