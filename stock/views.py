from pykiwoom.kiwoom import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from .models import *
from .serializers import *


@api_view(['POST'])
def current_stock(request):
    code = request.GET.get('code', '0')
    print(code)

    kiwoom = Kiwoom()
    df = kiwoom.block_request("opt10001",
                          종목코드=code,
                          output="종목정보요청",
                          next=0)
    # django model 사용
    # stock_object = Stock(name=df.종목명, code=code)
    # data = StockSerializer(stock_object).data
    print(df)
    data = df.to_json(orient="recorcds", force_ascii=False)
    return Response(data)


@api_view(['POST'])
def favorite_stock(request):
    kiwoom = Kiwoom()
    df = ["즐찾1", "즐찾2"]
    return Response(df)

@api_view(['POST'])
def real_stock(request):
    kiwoom = Kiwoom()
    
    # 실시간 data 등록 -> pykiwoom 수정
    kiwoom.SetRealReg("0101", "005930", "27;28", 0)
    kiwoom.connected_real = True
    while kiwoom.connected_real:
        while not kiwoom.received:
            pythoncom.PumpWaitingMessages()
            Response(kiwoom.tr_data)
        kiwoom.received = False

    # 실시간 data 해제
    kiwoom.connected_real = False
    kiwoom.DisconnectRealData("0101")

    # 현재 호가
    # df = kiwoom.block_request("opt10004",
    #                           종목코드=code,
    #                           output="주식호가",
    #                           next=0)
    return Response()
