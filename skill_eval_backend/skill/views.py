from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, SkillSubmission
from .serializers import SkillSubmissionSerializer

@api_view(['GET', 'POST'])
def login_user(request):
    """
    Authenticates a user based on email and password.
    """
    if request.method == 'GET':
        return Response({'message': 'Login API is ready. Please use POST method to login.'})

    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
        if user.password == password:
            return Response({'message': 'Login successful', 'user_id': user.id})
        else:
            return Response({'error': 'Invalid password'}, status=400)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)


@api_view(['GET', 'POST'])
def submit_skills(request):
    """
    Submits skills for a user. If user doesn't exist, creates a new user.
    """
    if request.method == 'GET':
        return Response({'message': 'Submit Skills API is ready. Please use POST method to submit skills.'})

    email = request.data.get('email')
    password = request.data.get('password') or 'default123'  # Optional password

    if not email:
        return Response({'error': 'Email is required'}, status=400)

    user, created = User.objects.get_or_create(email=email, defaults={'password': password})

    if created:
        message = "New user created and skills submitted."
    else:
        message = "Existing user found. Skills submitted."

    data = {
        'user': user.id,
        'skills': request.data.get('skills', [])
    }

    serializer = SkillSubmissionSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response({'message': message, 'data': serializer.data})
    
    return Response(serializer.errors, status=400)
