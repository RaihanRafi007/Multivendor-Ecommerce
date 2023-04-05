# Generated by Django 4.1.7 on 2023-03-20 15:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_customer_order_alter_productcategory_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderitems',
            options={'verbose_name_plural': 'Order Items'},
        ),
        migrations.AlterField(
            model_name='orderitems',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='main.order'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='category_product', to='main.productcategory'),
        ),
        migrations.CreateModel(
            name='CustomerAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_address', to='main.customer')),
            ],
        ),
    ]
