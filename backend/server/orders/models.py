from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product



class PaymentCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class PaymentMethod(models.Model):
    name = models.CharField(max_length=50, unique=True)
    category = models.ForeignKey(PaymentCategory, on_delete=models.CASCADE)
    data = models.CharField(max_length=500)
    date_added = models.DateTimeField(auto_now_add=True, editable=False)


    def __str__(self):
        return self.name
    

class Order(models.Model):
    username = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    payment_method = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)


