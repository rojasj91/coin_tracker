from django.views.generic import TemplateView, View
from django.http import HttpResponse

from .models import Alert

from django.core.mail import send_mail

from api.coinmarketcap import do_coin_market


class HomeView(TemplateView):
    template_name = 'home.html'


class CheckAlert(View):

    def get(self, request):
        # api currency data
        currency_data = do_coin_market()
        currencies = currency_data['data']

        # get the alerts
        alerts = Alert.objects.all()

        # loop alerts, check hi/low against api data
        for alert in alerts:
            currency = get_currency(alert.currency_id, currencies)

            if not currency:
                continue

            current_price = currency['quote']['USD']['price']

            # send email for failing alert
            if current_price < alert.low_alert:
                print('price is low', alert.id)
                send_mail(
                    'Price Drop',
                    'Login to Coin Tracker',
                    'no-reply@example.com',
                    [alert.user.email],
                    fail_silently=False,
                )

            if current_price > alert.high_alert:
                print("high price", alert.id)
                send_mail(
                    'Price Increase',
                    'Here is the message.',
                    'no-reply@example.com',
                    [alert.user.email],
                    fail_silently=False,
                )

        return HttpResponse(status=200)


def get_currency(id, currencies):
    for currency in currencies:
        if currency['id'] == id:
            return currency

    return None


