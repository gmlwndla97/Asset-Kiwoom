from django.shortcuts import render

# Create your views here.
from pykiwoom.kiwoom import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from .models import *

@api_view(['POST'])
def buy_stock(request):
    kiwoom = Kiwoom()
    # kiwoom.CommConnect(block=True)
    data = "매매시매"
    print(data)
    code = request.POST.get('code', '005930')
    number = int(request.POST.get('number', '1'))
    money = int(request.POST.get('money', 83100))
    # 주식계좌
    account = kiwoom.GetLoginInfo("ACCNO")
    # stock_account = '8156687211'
    stock_account = account[0]
    # #opt 10076
    # # 삼성전자, 10주, 시장가주문 매수
    print(str(code) + " " + str(number) + " " + str(money) + " " + str(stock_account))
    output = kiwoom.SendOrder("시장가매수", "0101", stock_account, 1, code, number, money, "00", "")
    # output = kiwoom.SendOrder("시장가매수", "0101", stock_account, 1, code, number, 0, "03", "")
    # code = '005930'
    # output = kiwoom.block_request("opt10001",
    #                           종목코드=code,
    #                           output="종목정보요청",
    #                           next=0)
    # # django model 사용
    # # stock_object = Stock(name=df.종목명, code=code)
    # # data = StockSerializer(stock_object).data
    # print(df)
    # data = df.to_json(orient="recorcds", force_ascii=False)
    # data = "매매매"
    # print(output)
    # print(accounts)
    return Response(str(code) + " " + str(number) + " " + str(money) + " " + str(stock_account))