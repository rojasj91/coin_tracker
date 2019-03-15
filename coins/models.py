import requests
from api import coinmarketcap

#add ListView

api = coinmarketcap
raw_data = requests.get(api).json()
data = raw_data['data']


class CoinTracker:

    for currency in data:

        name = data[currency]['name']
        price = data[currency]['quotes']['USD']['price']
        change_1h = data[currency]['quotes']['USD']['percent_change_1h']
        change_24h = data[currency]['quotes']['USD']['percent_change_24h']
        change_7d = data[currency]['quotes']['USD']['percent_change_7d']


