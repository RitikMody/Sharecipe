from django.shortcuts import render
from django.http import HttpResponse
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.


@api_view(["GET","POST"])
def recipeList(request):
    if request.method == "GET":
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes,many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
