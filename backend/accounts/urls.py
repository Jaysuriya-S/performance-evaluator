
from django.urls import path
from .views import ResetPasswordView, SubmitSkillView

urlpatterns = [
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('submit-skill/', SubmitSkillView.as_view(), name='submit-skill'),
]
