from rest_framework import serializers
from core.serializers.producto_serializer import ProductoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from core.models import Producto


class ProductoAPI(APIView):
    def get(self, request):
        prod = Producto.objects.all()
        pk = self.request.query_params.get('id')
        if pk is not None:
            prod = Producto.objects.filter(pk=pk)

        serializer = ProductoSerializer(prod, many=True)
        return Response(
            {
                "ok": True,
                "content": serializer.data
            }
        )
    def post(self, request):
        data = request.data
        serializer = ProductoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "ok": True
            })
        else:
            return Response({
                "errors": serializer.errors
            })