# Generated by Django 5.0.6 on 2024-07-03 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goods',
            old_name='ammount',
            new_name='price',
        ),
    ]
