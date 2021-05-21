# save Cosmos TPS in csv

from os import error, times
import requests
import json
import time
from datetime import datetime
import dateutil.parser
import calendar

port = 26657
block_height = int(input("Start Block height : "))
ratio = float(input("IBC Ratio : "))
f = open("./txs/txs_{}_{}.csv".format(block_height,ratio),"w")
f.write("block_height,txs\n")


pre_timestamp = 0
while True:
    try : 
        url = "http://localhost:{}/block?height={}".format(port,block_height)
        res = requests.get(url)
        txs = res.json()["result"]["block"]["data"]["txs"]
        txs_len = len(txs)
        t = res.json()["result"]["block"]["header"]["time"]
        t = dateutil.parser.isoparse(t)

        cur_timestamp = t.timestamp()
        timestamp = cur_timestamp - pre_timestamp
        
        f.write(str(block_height)+","+str(txs_len)+","+str(round(timestamp,3))+"\n")

        pre_timestamp = cur_timestamp
        block_height += 1 
    except :
        print("block_height : ", block_height)
        break

f.close()

