from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name



class Product(models.Model):
    name = models.CharField(max_length=255, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.name


class Goods(models.Model):
    name = models.CharField(max_length=2555)
    price = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    available_status = models.BooleanField(default=True)
    date_added = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.name


