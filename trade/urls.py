from django.urls import path
from .views import *

urlpatterns = [
    path('buy/', buy_stock),
    path('sell/', sell_stock),
]