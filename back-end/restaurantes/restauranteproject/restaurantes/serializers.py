from turtle import update
from rest_framework import serializers
from .models import Restaurante
from rest_framework.reverse import reverse

class RestauranteListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()
    class Meta:
        model = Restaurante
        fields = [
            'id',
            'nombre',
            'descripcion',
            'absolute_url'
            
        ]
    def get_absolute_url(self,obj):
        return reverse('detail_restaurantes',args=(obj.pk,))
    
    

class RestauranteDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    class Meta:
        model = Restaurante
        fields = [
            'id',
            'nombre',
            'descripcion',
            'imagen',
            'update',
            'delete'
        ]
    def get_update(self,obj):
        return reverse('update_restaurante',args=(obj.pk,))
    
    def get_delete(self,obj):
        return reverse('delete_restaurante',args=(obj.pk,))
    