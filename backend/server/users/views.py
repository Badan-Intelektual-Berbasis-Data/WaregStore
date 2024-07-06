from django.contrib.auth import get_user_model, authenticate
from django.middleware.csrf import get_token
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND
)
from rest_framework_simplejwt.tokens import RefreshToken
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

        query.save()

        return Response({"messege" : "Pengguna baru telah di daftarkan"})


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]


    def get(self, _, name):
        query = UserSerializer(get_user_model().objects.filter(name=name), many=True)

        if not query:
            return Response({"messege" : "User tidak ditemukan"}, status=HTTP_404_NOT_FOUND)

        return Response(query.data)



class LoginView(APIView):
    def get(self, request):
        return Response({"csrfmiddleweretoken" : get_token(request)})

    def post(self, request):

        post_data = request.POST

        name = post_data["name"]
        password = post_data["password"]


        user = authenticate(request, name=name, password=password)

        if not user:
            return Response({"messege" : "Username atau Password salah"})

        refresh_token = RefreshToken.for_user(request.user)

        return Response({
            "access" : str(refresh_token.access_token),
            "refresh" : str(refresh_token)
        })

