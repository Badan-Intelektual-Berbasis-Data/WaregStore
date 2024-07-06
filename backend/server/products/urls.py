from django.urls import path
from .views import (
    ProductView,
    CategoryView,
    ProductDetailView,
    GoodView
)

urlpatterns = [
    path('', ProductView.as_view()),
    path('category/', CategoryView.as_view()),
    path('good/', GoodView.as_view()),
    path('detail/<str:name>/', ProductDetailView.as_view()),
]