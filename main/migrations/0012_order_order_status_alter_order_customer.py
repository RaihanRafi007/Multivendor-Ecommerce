# Generated by Django 4.1.7 on 2023-04-05 05:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_orderitems_price_orderitems_qty'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_orders', to='main.customer'),
        ),
    ]