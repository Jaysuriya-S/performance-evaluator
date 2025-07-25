from rest_framework import serializers
from .models import User, SkillSubmission

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SkillSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillSubmission
        fields = '__all__'
