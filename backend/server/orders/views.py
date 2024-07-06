from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.generics import GenericAPIView
from server.settings import DEBUG
from .models import (
    Order,
    PaymentMethod,
    PaymentCategory
)
from .serializers import (
    PaymentSerializer,
    PaymentCategorySerializer,
    OrderSerializer
)


class OrdersView(GenericAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


    def get(self, _):
        data = OrderSerializer(Order.objects.all(), many=True)

        return Response(data.data)
    

    def post(self, request):
        req_data = OrderSerializer(data=request.POST)

        if not req_data.is_valid(raise_exception=DEBUG):
            return Response({"messege" : "Data tidak valid"}, status=HTTP_400_BAD_REQUEST)

        req_data.save()

        return Response({"messege" : "Data baru telah ditambahkan"})


class PaymentsView(GenericAPIView):
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentSerializer


    def get(self, _):
        serializer = PaymentSerializer(PaymentMethod.objects.all(), many=True)

        return Response(serializer.data)
    

    def post(self, request):
        req_data = PaymentSerializer(data=request.POST)

        if not req_data.is_valid(raise_exception=DEBUG):
            return Response({"messege" : "Data tidak valid"}, status=HTTP_400_BAD_REQUEST)

        req_data.save()

        return Response({"messege" : "Data baru telah ditambahkan"})


class PaymentsCategoryView(GenericAPIView):
    queryset = PaymentCategory.objects.all()
    serializer_class = PaymentCategorySerializer


    def get(self, _):
        serializer = PaymentCategorySerializer(PaymentCategory.objects.all(), many=True)

        return Response(serializer.data)
    

    def post(self, request):
        req_data = PaymentCategorySerializer(data=request.POST)

        if not req_data.is_valid(raise_exception=DEBUG):
            return Response({"messege" : "Data tidak valid"}, status=HTTP_400_BAD_REQUEST)

        req_data.save()

        return Response({"messege" : "Data baru telah ditambahkan"})