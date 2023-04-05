from django.shortcuts import render
from . import serializers
from . import models
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions, pagination, viewsets
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework.views import APIView
from .models import Customer
from main.models import Customer




# Create your views here.
# Vendors
class VendorList(ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]


class VendorDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


# Products
class ProductList(ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # permission_classes = [permissions.IsAuthenticated]
    pagination_class = pagination.PageNumberPagination
    
    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     category = self.request.GET['category']
    #     if category:
    #         category = models.ProductCategory.objects.get(id=category)
    #         qs = qs.filter(category=category)
    #     return qs
    
    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:
            category = self.request.GET['category']
            category = models.ProductCategory.objects.get(id=category)
            qs = qs.filter(category=category)
        return qs


class TagProductList(ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # permission_classes = [permissions.IsAuthenticated]
    pagination_class = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs

class RelatedProductList(ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # permission_classes = [permissions.IsAuthenticated]
    # pagination_class = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product= models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category)
        return qs

class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

# Product Rating
class ProductRatingViewSet(viewsets.ModelViewSet):
    queryset = models.ProductRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer
    # permission_classes = []


# Customers
class CustomerList(ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerAddressViewSet(viewsets.ModelViewSet):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer
    permission_classes = []


@csrf_exempt
def customer_login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        customer = models.Customer.objects.get(user=user)
        msg={
        'bool': True,
        'user': user.username,
        'id': customer.id,
        }
    else:
        msg={
        'bool': False,
        'msg': 'Invalid Username or Password.'
        }
    
    return JsonResponse(msg)

@csrf_exempt
def customer_register(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    username = request.POST['username']
    email = request.POST['email']
    mobile = request.POST['mobile']
    password = request.POST['password']
    
    try:
        user = User.objects.create(
            first_name = first_name,
            last_name = last_name,
            username = username,
            email = email,
            password = password
            )
        
        if user is not None:
            try:
                # Create Customer
                customer = models.Customer.objects.create(
                    user = user,
                    mobile = mobile
                )
                msg={
                'bool': True,
                'user': user.id,
                'customer': customer.id,
                'msg': 'Thank you for your registration. You can login now'
                }
            except IntegrityError:
                msg={
                    'bool': False,
                    'msg': 'Mobile already exists!'
                    }
        else:
            msg={
            'bool': False,
            'msg': 'Oops... Something went wrong.'
            }
    except IntegrityError:
         msg={
            'bool': False,
            'msg': 'Username already exists!'
            }
    
    return JsonResponse(msg)
        


class OrderList(ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        print(request.POST)
        return super().post(request, *args, **kwargs)
    
class OrderItemList(ListCreateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemSerializer
    # permission_classes = [permissions.IsAuthenticated]
    

# class OrderList(APIView):
#     def post(self, request, format=None):
#         customer_id = request.data.get('customer_id')
#         customer = Customer.objects.get(id=customer_id)
#         order = Order.objects.create(customer=customer)
#         serializer = OrderSerializer(order)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class OrderDetail(ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items


# Product Categories
class CategoryList(ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]


class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def update_order_status(request, order_id):
    if request.method == 'POST':
        updateRes = models.Order.objects.filter(id=order_id).update(order_status=True)
        msg={
            'bool': False,
            }
        if updateRes:
            msg={
                'bool': True,
                }
    
    return JsonResponse(msg)


    