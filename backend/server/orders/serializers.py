from rest_framework.serializers import ModelSerializer
from .models import (
    Order,
    PaymentMethod,
    PaymentCategory
)

class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'



class PaymentSerializer(ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = '__all__'


class PaymentCategorySerializer(ModelSerializer):
    class Meta:
        model = PaymentCategory
        fields = '__all__'