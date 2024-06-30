from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)



class Product(models.Model):
    name = models.CharField(max_length=255, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True, editable=False)



class Goods(models.Model):
    name = models.CharField(max_length=2555)
    ammount = models.IntegerField()
    available_status = models.BooleanField(default=True)
    date_added = models.DateTimeField(auto_now_add=True, editable=False)



