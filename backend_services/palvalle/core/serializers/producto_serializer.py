from rest_framework import serializers
from core.models import Producto
class CategoriaSerializer(serializers.Serializer):
    nombre =serializers.CharField(max_length=150)


class ProductoSerializer(serializers.Serializer):

    id = serializers.SerializerMethodField('get_id')
    nombre = serializers.CharField(max_length=150)
    descripcion = serializers.CharField(max_length=300)
    precio = serializers.FloatField()
    stock = serializers.IntegerField()
    fecha_vencimiento= serializers.DateField()
    fotos = serializers.CharField(max_length=2000)
    Categorium = serializers.SerializerMethodField('get_categorium')
    


    def get_id(self, obj):
        return obj.id

    def get_categorium(self, obj):
        serializer = CategoriaSerializer(obj.categoria)
        return serializer.data
    
    def save(self):
        validated_data = self.validated_data
        prod = Producto.objects.create(**validated_data)
        return prod