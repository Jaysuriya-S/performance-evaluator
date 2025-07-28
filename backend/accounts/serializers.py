# accounts/serializers.py

from rest_framework import serializers
from .models import Skill, UserSkill

class UserSkillSerializer(serializers.ModelSerializer):
    skills = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = UserSkill
        fields = ['name', 'email', 'skills']

    def create(self, validated_data):
        skills_data = validated_data.pop('skills')
        user_skill = UserSkill.objects.create(**validated_data)

        for skill_name in skills_data:
            skill, _ = Skill.objects.get_or_create(name=skill_name)
            user_skill.skills.add(skill)

        return user_skill
