from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product

# Create your models here.
class Order(models.Model):
    username = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50)
    status = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)
