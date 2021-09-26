from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE

# Create your models here.
class User(AbstractUser):
    email =  models.EmailField(unique=True)
    usu_nom = models.CharField(max_length=50)
    usu_ape=models.CharField(max_length=50)
    usu_tipo=models.CharField(max_length=50)

class Categoria(models.Model):
    nombre = models.CharField(max_length=150)
    descripcion = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Producto(models.Model):
    nombre = models.CharField(max_length=150)
    descripcion = models.CharField(max_length=300)
    precio = models.FloatField()
    stock = models.IntegerField()
    fecha_vencimiento= models.DateField()
    fotos = models.CharField(max_length=2000)
    categoria = models.ForeignKey(Categoria, on_delete=CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)