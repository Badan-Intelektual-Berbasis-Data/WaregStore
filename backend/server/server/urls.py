
from django.urls import path, include

urlpatterns = [
    path('api/products/', include("products.urls")),
    path('api/users/', include("users.urls")),
]
