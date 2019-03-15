
from rest_framework.views import View

from .coinmarketcap import  do_coin_market

class CoinLatest(View):
    def get(self):

        # 1. call do_coin_market function

        # 2. get the data from #1 into a variable
        # 3. create a django response
        # 4. put the variable from #2 in the django response
        # 5. return response

        return 'api_called'