from rest_framework import serializers
from core.serializers.categoria_serializer import CategoriaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from core.models import Categoria


class CategoriaAPI(APIView):
    def get(self, request):
        categoria = Categoria.objects.all()
        pk = self.request.query_params.get('id')
        if pk is not None:
            categoria = Categoria.objects.filter(pk=pk)

        serializer = CategoriaSerializer(categoria, many=True)
        return Response(
            {
                "ok": True,
                "content": serializer.data
            }
        )
    
    def post(self, request):
        data = request.data
        serializer = CategoriaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "ok": True
            })
        else:
            return Response({
                "errors": serializer.errors
            })
    
    def put(self, request, pk=None):
        data =request.data
        categoria = Categoria.objects.filter(pk=pk)
        serializer = CategoriaSerializer(data=data)
        if serializer.is_valid():
            categoria.update(**serializer.validated_data)
            return Response({
                "ok": True
            })
        else:
            return Response({
                "errors": serializer.errors
            })
    
    def delete(self, request, pk=None):
        categoria = Categoria.objects.filter(pk=pk)
        categoria.delete()

        return Response({
            "ok": True
        })