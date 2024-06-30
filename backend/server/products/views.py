from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_405_METHOD_NOT_ALLOWED
)
from server.settings import DEBUG
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    GoodsSerializer
)
from .models import (
    Product,
    Category,
    Goods
)


class ProductView(APIView):


    def get(self, _):
        return Response({"messege" : "ngapain deck?"}, status=HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):

        serializer = ProductSerializer(data=request.POST)

        if not serializer.is_valid(raise_exception=DEBUG):
            return Response({"messsege" : "Data tidak valid"})


        return Response({"messege" : "Produk baru ditambahkan"})

        


class CategoryView(APIView):
    def get(self, _):
        query = CategorySerializer(Category.objects.all())

        return Response(query.data)


        


