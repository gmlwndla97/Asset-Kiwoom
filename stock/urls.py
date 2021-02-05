from django.urls import path
from .views import *

urlpatterns = [
    path('current/', current_stock),
    path('favorite/', favorite_stock),
    path('real/', real_stock),
]