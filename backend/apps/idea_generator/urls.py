# urls.py en tu aplicación Django
from django.urls import path
from .views import idea_generator

urlpatterns = [
    path('idea-generator/', idea_generator, name='idea-generator'),
]
