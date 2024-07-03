from django.urls import path
from .views import (
    ProductView,
    CategoryView,
    ProductDetailView
)

urlpatterns = [
    path('', ProductView.as_view()),
    path('category/', CategoryView.as_view()),
    path('<str:name>/', ProductDetailView.as_view()),
]