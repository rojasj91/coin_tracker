from django.test import TestCase

from django.urls import reverse


class TestViews(TestCase):

    def test_login(self):
        view_url = reverse('users:login')
        print(view_url)
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

    def test_signup(self):
        view_url = reverse('users:signup')
        print(view_url)
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)
