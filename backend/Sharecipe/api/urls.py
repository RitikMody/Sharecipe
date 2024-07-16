from django.urls import path
from.views import recipeList

urlpatterns = [
    path('recipe',recipeList)
]
