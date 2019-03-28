from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
import os


def do_coin_market():
  url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
  parameters = {
    'start': '1',
    'limit': '100',
    'convert': 'USD',
  }
  headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': os.environ.get('X-CMC_PRO_API_KEY'),
  }

  session = Session()
  session.headers.update(headers)

  try:
    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    return data
  except (ConnectionError, Timeout, TooManyRedirects) as e:
    return e
