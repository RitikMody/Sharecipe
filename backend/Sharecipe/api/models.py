from django.db import models

# Create your models here.
class Recipe(models.Model):
    cuisineChoices = [("Indian","Indian"),("Korean","Korean")]
    title = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=50, choices=cuisineChoices)
    instructions = models.TextField()
