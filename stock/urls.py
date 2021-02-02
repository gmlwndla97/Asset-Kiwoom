from django.urls import path
from .views import current_stock

urlpatterns = [
    path('', current_stock),
]