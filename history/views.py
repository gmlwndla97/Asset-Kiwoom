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

    # TR 요청 (연속조회)
    dfs = []
    df = kiwoom.block_request("opw00018",
                            계좌번호="8156783711",
                            비밀번호="",
                            비밀번호입력매체구분=00,
                            조회구분=1,
                            output="계좌평가잔고개별합산",
                            next=0)
    print(df.head())
    dfs.append(df)

    while kiwoom.tr_remained:
        df = kiwoom.block_request("opw00018",
                               계좌번호="8156783711",
                                비밀번호="",
                                비밀번호입력매체구분=00,
                                조회구분=1,
                                output="계좌평가잔고개별합산",
                                next=2)
        dfs.append(df)
        time.sleep(1)

    df = pd.concat(dfs)
    print(df)
    return Response()

