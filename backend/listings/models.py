from django.db import models
from django.contrib.auth.models import User

class Apartment(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class ApartmentImage(models.Model):
    apartment = models.ForeignKey(Apartment, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='apartments/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

