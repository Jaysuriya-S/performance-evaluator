from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail

from .models import Skill, UserSkill
from .serializers import UserSkillSerializer


# 🔐 Password Reset View
class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')

        if not email or not new_password or not confirm_password:
            return Response({"detail": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({"detail": "Passwords do not match."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"detail": "User with this email does not exist."}, status=status.HTTP_404_NOT_FOUND)

        try:
            validate_password(new_password, user)
        except Exception as e:
            return Response({"detail": list(e)}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        return Response({"detail": "Password reset successful."}, status=status.HTTP_200_OK)


# ✅ Skill Submission View with Email Sending
class SubmitSkillView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSkillSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # Extract user info
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            skills = serializer.validated_data.get('skills')  # assuming it's a list or similar

            # Prepare email content
            subject = "✅ SkillSight - Skills Submitted Successfully"
            message = f"""
Hi {name},

Thank you for submitting your skills to SkillSight! 🎯

You submitted the following skills:
{', '.join(skills)}

We'll use these to tailor suggestions just for you!

Best regards,  
The SkillSight Team
"""

            try:
                send_mail(
                    subject,
                    message,
                    'Skillsight09@gmail.com',  # FROM
                    [email],                   # TO
                    fail_silently=False,
                )
            except Exception as e:
                print("❌ Email sending failed:", e)

            return Response({"message": "Skills submitted and confirmation email sent!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
