#from audioop import reverse
from rest_framework import serializers
from .models import Sucursal
from rest_framework.reverse import reverse

class SucursalListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()
    class Meta:
        model = Sucursal
        fields = [
            'id',
            'nombre_sucursal',
            'direccion',
            'ciudad',
            'telefono',
            'estado',
            'codigo_postal',
            'latitud',
            'longitud',
            'absolute_url'
        ]

    def get_absolute_url(self,obj):
        return reverse('detail_sucursal',args=(obj.pk,))

class SucursalDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    class Meta:
        model = Sucursal
        fields = [
            'id',
            'nombre_sucursal',
            'direccion',
            'ciudad',
            'telefono',
            'estado',
            'codigo_postal',
            'latitud',
            'longitud',
            'imagen',
            'update',
            'delete'
        ]
    def get_update(self,obj):
        return reverse('update_sucursal',args=(obj.pk,))

    def get_delete(self,obj):
        return reverse('delete_sucursal',args=(obj.pk,))