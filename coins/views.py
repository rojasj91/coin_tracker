from rest_framework.views import View

class CoinLatest(View):
    def get(self, request):
        return 'api_called'