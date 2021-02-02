import platform
from pykiwoom.kiwoom import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

@api_view(['POST'])
def current_user(request):
    print(platform.architecture())

    kiwoom = Kiwoom()
    kiwoom.CommConnect()

    account_num = kiwoom.GetLoginInfo("ACCOUNT_CNT")  # 전체 계좌수
    accounts = kiwoom.GetLoginInfo("ACCNO")  # 전체 계좌 리스트
    user_id = kiwoom.GetLoginInfo("USER_ID")  # 사용자 ID
    user_name = kiwoom.GetLoginInfo("USER_NAME")  # 사용자명
    keyboard = kiwoom.GetLoginInfo("KEY_BSECGB")  # 키보드보안 해지여부
    firewall = kiwoom.GetLoginInfo("FIREW_SECGB")  # 방화벽 설정 여부

    print(account_num)
    print(accounts)
    print(user_id)
    print(user_name)
    print(keyboard)
    print(firewall)

    return Response(user_name + user_id)
