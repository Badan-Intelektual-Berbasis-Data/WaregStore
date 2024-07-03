from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_405_METHOD_NOT_ALLOWED
)
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly,
    AllowAny    
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


class ProductView(GenericAPIView):

    permission_classes = [AllowAny if DEBUG == True else IsAuthenticatedOrReadOnly ]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get(self, _):
        serializer = ProductSerializer(Product.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):

        serializer = ProductSerializer(data=request.POST)

        if not serializer.is_valid(raise_exception=DEBUG):
            return Response({"messsege" : "Data tidak valid"}, status=HTTP_400_BAD_REQUEST)


        serializer.save()

        return Response({"messege" : "Produk baru ditambahkan"})

        


class CategoryView(GenericAPIView):
    permission_classes = [AllowAny if DEBUG == True else IsAuthenticatedOrReadOnly ]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def get(self, _):
        serializer = CategorySerializer(Category.objects.all(), many=True)

        return Response(serializer.data)


    def post(self, request):

        serializer = CategorySerializer(data=request.POST)

        if not serializer.is_valid(raise_exception=DEBUG):
            return Response({"messege" : "Data tidak valid"}, status=HTTP_400_BAD_REQUEST)
        
        serializer.save()

        return Response({"messege" : "Kategori baru ditambahkan"})


class ProductDetailView(APIView):
    def get(self, _, name):
        query = Product.objects.filter(name=name)

        if not query:
            return Response({"messege" : f"Pencarian tentang {name}, tidak ditemukan"}, status=HTTP_404_NOT_FOUND)
        
        return Response({"data" : ProductSerializer(query).data})


