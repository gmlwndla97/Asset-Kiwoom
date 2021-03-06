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
    account_list = kiwoom.GetLoginInfo("ACCNO")

    print(account_num)
    print(accounts)
    print(user_id)
    print(user_name)

    return Response(user_name + user_id)
