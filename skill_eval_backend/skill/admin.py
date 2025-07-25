from django.contrib import admin
from .models import User, SkillSubmission

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'password')  # Show fields in admin list

@admin.register(SkillSubmission)
class SkillSubmissionAdmin(admin.ModelAdmin):
    list_display = ('user', 'skills')
