import logging
logger = logging.getLogger(__name__)
from channels.generic.websocket import WebsocketConsumer
import threading
from pykiwoom.kiwoom import *
import json
import time

class RealConsumer(WebsocketConsumer):
    thread = None

    def connect(self):
        print("연결")
        self.accept()
        RealConsumer.thread = threading.Thread(target=real_stock(self))
        RealConsumer.thread.daemon = True
        RealConsumer.thread.start()

    def disconnect(self, close_code):
        print("종료")
        try:
            kiwoom = Kiwoom()
            kiwoom.connected_real = False
            kiwoom.received = False
            kiwoom.DisconnectRealData("0101")
            del RealConsumer.thread
        except Exception as e:
            print(e)

    def receive(self, text_data):
        print(text_data)
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        if message == "소켓 해제":
            self.disconnect(self)
        self.send(text_data=json.dumps({
            'message': message
        }))


def real_stock(self):
    print("Thread 시작")
    try:
        kiwoom = Kiwoom()
        kiwoom.received = False
        kiwoom.connected_real = True
        fids = RealType.REALTYPE['주식호가잔량'].keys()
        string_fids = [str(fid) for fid in fids]
        print(string_fids)
        kiwoom.SetRealReg("0101", "005930", ';'.join(string_fids), "0")
        while kiwoom.connected_real:
            while not kiwoom.received:
                pythoncom.PumpWaitingMessages()
            kiwoom.received = False
            print(kiwoom.tr_data)
            self.send(text_data=json.dumps({
                'message': kiwoom.tr_data
            }))
            time.sleep(2)
        self.send(text_data=json.dumps({
            'message': '소켓 해제'
        }))
    except Exception as e:
        print(e)