from django.shortcuts import render
from rest_framework import generics
from .serializers import RestauranteListSerializer, RestauranteDetailSerializer
from .models import Restaurante
# Create your views here.

class RestauranteListAPIView(generics.ListAPIView):
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteListSerializer

class RestauranteRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id" 
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteDetailSerializer

class RestauranteCreateAPIView(generics.CreateAPIView): 
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteDetailSerializer

class RestauranteRetrieUpdateveAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteDetailSerializer

class RestauranteDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Restaurante.objects.all()