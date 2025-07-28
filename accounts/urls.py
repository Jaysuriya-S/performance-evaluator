from django.urls import path
from .views import ResetPasswordView, SubmitSkillView, get_user_stats  # ✅ Add this
from .views import get_user_list
urlpatterns = [
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('submit-skill/', SubmitSkillView.as_view(), name='submit-skill'),
    path('user-stats/', get_user_stats, name='user-stats'),  # ✅ Add this line
    path('user-list/', get_user_list, name='user-list'),
]
