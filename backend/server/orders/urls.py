from django.urls import path
from .views import (
    OrdersView,
    PaymentsCategoryView,
    PaymentsView
)

urlpatterns = [
    path('', OrdersView.as_view()),
    path('payments_method', PaymentsView.as_view()),
    path('payments_category', PaymentsCategoryView.as_view()),
]
