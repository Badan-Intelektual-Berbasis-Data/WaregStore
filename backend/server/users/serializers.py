from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework.serializers import (
    ModelSerializer,
    ValidationError
)
from .models import (
    User
)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ["groups", "is_superuser", "user_permissions", "last_login"]


    def create(self, validated_data):
        password = validated_data.pop("password")
        obj = self.Meta.model.objects.create(**validated_data)
        obj.set_password(password)
        obj.save()

        return obj






# class LoginSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = ["name", "password"]

#     def validate(self, data):
#         username = data.get("name")
#         password = data.get("password")

#         if username and password:
#             user = authenticate(request=self.context.get("request"), name=username, password=password)

#             if not user:
#                 raise ValidationError(_("Username atau Password Salah"), code="authorization")

#             data["user"] = user
#             return data

#         raise ValidationError(_("Username atau Password Salah"), code="authorization")




