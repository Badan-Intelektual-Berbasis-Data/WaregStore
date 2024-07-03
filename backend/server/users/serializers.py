from rest_framework.serializers import ModelSerializer
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
