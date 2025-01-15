import google.generativeai as genai
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

import os
import environ

env = environ.Env()
environ.Env.read_env()

@api_view(["POST"])
@permission_classes([AllowAny])
def idea_generator(request):
    KEY = os.environ.get('API_KEY') 
    genai.configure(api_key=KEY)
    model = genai.GenerativeModel("gemini-pro")
    prompt = request.data.get("prompt")
    
    response = model.generate_content(prompt).text

    return Response({"gemini": response}, status=status.HTTP_200_OK)