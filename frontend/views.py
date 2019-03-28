from django.views.generic import View

from django.http import HttpResponse


class DashboardView(View):
    def get(self, request):
        try:
            with open('frontend/static/build/index.html') as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse(
                'NPM run build',
                status=501,
            )