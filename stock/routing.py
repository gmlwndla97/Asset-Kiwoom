from django.conf.urls import url
from .consumers import *


websocket_urlpatterns = [
    url('ws/stock/real', RealConsumer.as_asgi()),
]