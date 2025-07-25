from django.db import models

class User(models.Model):
    """
    Represents a user with an email and password.
    """
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.email


class SkillSubmission(models.Model):
    """
    Stores submitted skills for each user as a JSON field.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skills = models.JSONField()

    def __str__(self):
        return f"{self.user.email} - Skills"

