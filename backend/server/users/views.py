from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND
)
from .serializers import UserSerializer
from server.settings import DEBUG

class UsersView(GenericAPIView):
    queryset = get_user_model()
    serializer_class = UserSerializer

    def get(self, _):

        query = UserSerializer(get_user_model().objects.all(), many=True)

        return Response(query.data)
    

    def post(self, request):
        query = UserSerializer(data=request.POST)


        if not query.is_valid(raise_exception=DEBUG):
            return Response({"messege" : "Form tidak valid"}, status=HTTP_400_BAD_REQUEST)
        
        if not query:
            return Response({"messege" : "User tidak ditemukan"}, status=HTTP_404_NOT_FOUND)


        return Response(query.data)


class UserDetailView(APIView):
    def get(self, _, user):
        query = UserSerializer(get_user_model().objects.filter(name=user))

        if not query:
            return Response({"messege" : "Belum ada users yang di daftarkan"}, status=HTTP_404_NOT_FOUND)

        return Response(query.data)


    