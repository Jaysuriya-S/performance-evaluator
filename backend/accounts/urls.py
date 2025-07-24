from django.urls import path
from .views import ResetPasswordView

urlpatterns = [
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
]
