
from django.urls import path
from .views import (
    UsersView,
    UserDetailView
)

urlpatterns = [
    path('', UsersView.as_view()),
    path('detail/<str:name>', UserDetailView.as_view()),
]
