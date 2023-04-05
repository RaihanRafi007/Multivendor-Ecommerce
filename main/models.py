from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Vendor Models
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
    
    def __str__(self):
        return self.user.username

# Product Category Models
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Product Categories"

# Product Models
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_product')
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=300, unique=True, null=True)
    detail = models.TextField(null=True)
    price = models.FloatField()
    tags = models.TextField(null=True)
    image = models.ImageField(upload_to="product_images/", null=True)
    demo_url = models.URLField(null=True,blank=True)

    def __str__(self):
        return self.title
    
    def tag_list(self):
        tagList= self.tags.split(',')
        return tagList
    
# Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()
    
    def __str__(self):
        return self.user.username
    
# Customer Address Model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_address')
    address = models.TextField()
    default_address = models.BooleanField(default=False)
    
    def __str__(self):
        return self.address

# Order Model   
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_orders')
    order_time = models.DateTimeField(auto_now_add=True)
    order_status = models.BooleanField(default=False)
    
    def __str__(self):
        return '%s' % (self.order_time)
    
# Order Items Model
class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return self.product.title
    
    class Meta:
        verbose_name_plural = "Order Items"
        

#  Product Rating and Reviews
class ProductRating(models.Model):
    customer = customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customers_rating')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_rating')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.rating} - {self.reviews}'

# Product Images Model
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_images')
    image = models.ImageField(upload_to='product_images/', null=True)
    
    def __str__(self):
        return self.image.url