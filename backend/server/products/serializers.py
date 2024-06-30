from rest_framework.serializers import ModelSerializer
from .models import (
    Product,
    Category,
    Goods
)



class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        depth = 1
        fields = '__all__'
    


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class GoodsSerializer(ModelSerializer):
    class Meta:
        model = Goods
        depth = 1
        fields = '__all__'

