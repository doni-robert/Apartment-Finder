from rest_framework import serializers
from .models import Apartment, ApartmentImage

class ApartmentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentImage
        fields = ('id', 'image', 'uploaded_at')

class ApartmentSerializer(serializers.ModelSerializer):
    images = ApartmentImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Apartment
        fields = ('id', 'title', 'description', 'price', 'location', 'latitude', 'longitude', 'posted_by', 'created_at', 'images')
