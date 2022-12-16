from django.shortcuts import render
from rest_framework import generics
from .serializers import SucursalListSerializer, SucursalDetailSerializer
from .models import Sucursal

# Create your views here.
class SucursalListAPIView(generics.ListAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalListSerializer

class SucursalRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id" 
    queryset = Sucursal.objects.all()
    serializer_class = SucursalDetailSerializer

class SucursalCreateAPIView(generics.CreateAPIView): 
    queryset = Sucursal.objects.all()
    serializer_class = SucursalDetailSerializer

class SucursalRetrieUpdateveAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Sucursal.objects.all()
    serializer_class = SucursalDetailSerializer

class SucursalDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Sucursal.objects.all()