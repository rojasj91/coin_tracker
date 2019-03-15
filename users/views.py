from django.shortcuts import render
from django.views.generic import CreateView, TemplateView
from django.contrib.auth import get_user_model, authenticate, login
from django.urls import reverse_lazy

from .forms import SignupForm

from .models import Avatar


User = get_user_model()


class SignupView(CreateView):
    template_name = 'signup.html'
    model = User

    form_class = SignupForm

    def form_valid(self, form):
        response = super().form_valid(form)

        # Authenticate the user checks provided password against the hash
        user = authenticate(
            username=form.cleaned_data['email'],
            password=form.cleaned_data['password']
        )

        # Login the user (does the session table/cookie stuff)
        login(self.request, user)

        return response


class ImageView(TemplateView):
    template_name = "profile.html"

    def get_context_data(self, **kwargs):
        images = Avatar.objects.all()

        context = {
            'images': images
        }

        return context
