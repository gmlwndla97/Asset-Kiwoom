"""
ASGI config for KiwoomHTS project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import stock.routing
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'KiwoomHTS.settings')

# application = get_asgi_application()

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'http': get_asgi_application(),
  	# 만약에 websocket protocol 이라면, AuthMiddlewareStack
    'websocket': AuthMiddlewareStack(
        # URLRouter 로 연결, 소비자의 라우트 연결 HTTP path를 조사
        URLRouter(
            stock.routing.websocket_urlpatterns
        )
    ),
})