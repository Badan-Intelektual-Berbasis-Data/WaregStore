from rest_framework.serializers import (
    ModelSerializer,
    PrimaryKeyRelatedField
)
from .models import (
    Product,
    Category,
    Goods
)



class ProductSerializer(ModelSerializer):
    category = PrimaryKeyRelatedField(queryset=Category.objects.all())
    class Meta:
        model = Product
        depth = 1
        fields = '__all__'
    


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class GoodsSerializer(ModelSerializer):
    product = PrimaryKeyRelatedField(queryset=Product.objects.all())
    class Meta:
        model = Goods
        depth = 1
        fields = '__all__'

