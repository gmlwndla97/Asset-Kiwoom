from pykiwoom.kiwoom import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


@api_view(['POST'])
def current_stock(request):
    code = request.GET.get('code', '0')
    print(code)

    kiwoom = Kiwoom()
    df = kiwoom.block_request("opt10001",
                          종목코드=code,
                          output="주식기본정보",
                          next=0)

    # django model 사용
    # stock_object = Stock(name=df.종목명, code=code)
    # data = StockSerializer(stock_object).data

    data = df.to_json(orient="records", force_ascii=False)
    return Response(data)
