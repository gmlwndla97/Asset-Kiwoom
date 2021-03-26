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

    df=df.drop(['전일종가', '전일매수수량', '전일매도수량','금일매수수량','금일매도수량',
    '매입금액','매입수수료','평가금액','평가수수료','세금','수수료합','보유비중(%)','신용구분',
    '신용구분명','대출일'], axis=1)
    data = df.to_json(orient="records", force_ascii=False)
    #print(data)  
 
    return Response(data)



@api_view(['POST'])
def notSigned_stock(request):
    kiwoom = Kiwoom() # Kiwoom 인스턴스 생성
    kiwoom.CommConnect() # API 접속

    # opt10075 요청
    df = kiwoom.block_request("opt10075",
                            계좌번호=account,
                            전체종목구분=0,
                            매매구분=0,
                            체결구분=0,
                            output  = "실시간미체결요청",
                            next=0)
    print(df)
    data = df.to_json(orient="records", force_ascii=False)
    return Response(data)