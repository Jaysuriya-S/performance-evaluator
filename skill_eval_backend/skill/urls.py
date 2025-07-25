from django.urls import path
from .views import login_user, submit_skills

urlpatterns = [
    path('login/', login_user, name='login_user'),
    path('submit/', submit_skills, name='submit_skills'),
    path('api/submit-skill/', submit_skills, name='submit-skill'),  # Updated path to match your request
]
