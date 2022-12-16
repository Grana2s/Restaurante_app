from django.db import models
from django.core.validators import RegexValidator
#from django.db.models.expressions import F

# Create your models here.
class Sucursal(models.Model):
    nombre_sucursal = models.CharField(max_length=100,blank=False)
    direccion = models.CharField(max_length=100,blank=True)
    ciudad = models.CharField(max_length=50,blank=False)
    telefono = models.CharField(max_length=13,blank=False)
    estado = models.CharField(max_length=50,blank=False)
    codigo_postal = models.CharField(max_length=5,blank=True)
    latitud = models.FloatField(blank=True)
    longitud = models.FloatField(blank=True)
    imagen = models.ImageField(upload_to='imagenesSucursal',blank=True)
    def __str__(self):
        return self.nombre_sucursal

