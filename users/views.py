from django.shortcuts import render
from django.views.generic import CreateView, TemplateView
from django.contrib.auth import get_user_model, authenticate, login
from django.urls import reverse_lazy

from .forms import SignupForm


User = get_user_model()


class SignupView(CreateView):
    template_name = 'signup.html'
    model = User
    success_url = reverse_lazy('dashboard')

    form_class = SignupForm

    def form_valid(self, form):
        response = super().form_valid(form)

        # Authenticate the user checks provided password against the hash
        user = authenticate(
            username=form.cleaned_data['email'],
            password=form.cleaned_data['password1']
        )

        # Login the user (does the session table/cookie stuff)
        login(self.request, user)

        return response

