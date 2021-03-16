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
    kiwoom.CommConnect()
    data = "매매시작"
    # print(data)
    # print(request)
    # print(type(request))
    # print(request.body)
    # print(type(request.body))
    request = json.loads(request.body)
    # request = json.loads(request.body.decode("utf-8"))
    print(request)
    print(type(request))
    # code = data.get('code', '000')
    # number = int(data.get('number', 0))
    # money = int(data.get('money', 0))
    code = request['code']
    number = int(request['number'])
    money = int(request['money'])
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
    data = "매매끝"
    return Response(str(code) + " " + str(number) + " " + str(money) + " " + str(stock_account))


@api_view(['POST'])
def sell_stock(request):
    kiwoom = Kiwoom()
    kiwoom.CommConnect()
    data = "매수시작"
    print(data)
    request = json.loads(request.body)
    print(request)
    print(type(request))
    code = request['code']
    number = int(request['number'])
    money = int(request['money'])
    # 주식계좌
    account = kiwoom.GetLoginInfo("ACCNO")
    # stock_account = '8156687211'
    stock_account = account[0]
    # #opt 10076
    # # 삼성전자, 10주, 시장가주문 매수
    print(str(code) + " " + str(number) + " " + str(money) + " " + str(stock_account))
    output = kiwoom.SendOrder("시장가매수", "0101", stock_account, 2, code, number, money, "00", "")
    data = "매매끝"
    return Response(str(code) + " " + str(number) + " " + str(money) + " " + str(stock_account))