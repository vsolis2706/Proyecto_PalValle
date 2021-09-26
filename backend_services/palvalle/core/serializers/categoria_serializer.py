from rest_framework import serializers

from core.models import Categoria

class CategoriaSerializer(serializers.Serializer):

    id = serializers.SerializerMethodField('get_id')
    nombre = serializers.CharField(max_length=150)
    descripcion = serializers.CharField(max_length=300)
    
    def get_id(self, obj):
        return obj.id

    def save(self):
        validated_data = self.validated_data
        categoria = Categoria.objects.create(**validated_data)
        return categoria