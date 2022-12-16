#from _typeshed import Self
from django.db import models
from django.core.validators import RegexValidator
# Create your models here.

class Restaurante(models.Model):
    nombre = models.CharField(max_length=100,blank=False)
    descripcion = models.TextField(blank=True)
    imagen = models.ImageField(upload_to='imagenesRestaurante',blank=True)

    def __str__(self):
        return self.nombre