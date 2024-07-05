
from django.urls import path
from .views import (
    UsersView,
    UserDetailView,
    LoginView
)

urlpatterns = [
    path('', UsersView.as_view()),
    path('detail/<str:name>/', UserDetailView.as_view()),
    path('login', LoginView.as_view()),
]
