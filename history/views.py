from django.shortcuts import render
from pykiwoom.kiwoom import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
import time
import pandas as pd
# Create your views here.

@api_view(['POST'])
def current_account(request):

    kiwoom = Kiwoom() # Kiwoom 인스턴스 생성
    kiwoom.CommConnect() # API 접속
    account_list = kiwoom.GetLoginInfo("ACCNO")
    account = account_list[0]

    # opw00018 요청
    df = kiwoom.block_request("opw00018",
                            계좌번호=account,
                            비밀번호="",
                            비밀번호입력매체구분="00",
                            조회구분=2,
                            output="계좌평가잔고개별합산",
                            next=0)

    data = df.to_json(orient="records", force_ascii=False)
    return Response(data)

