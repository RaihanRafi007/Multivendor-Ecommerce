import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Register from "./pages/customer/Register";
import Login from "./pages/customer/Login";
import Dashboard from "./pages/customer/Dashboard";
import Orders from "./pages/customer/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailure from "./pages/OrderFailure";
import Wishlist from "./pages/customer/Wishlist";
import Profile from "./pages/customer/Profile";
import ChangePassword from "./pages/customer/ChangePassword";
import AddressList from "./pages/customer/AddressList";
import AddAddress from "./pages/customer/AddAddress";
import SellerRegister from "./pages/seller/SellerRegister";
import SellerLogin from "./pages/seller/SellerLogin";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerProducts from "./pages/seller/SelllerProducts";
import AddProduct from "./pages/seller/AddProduct";
import VendorOrders from "./pages/seller/VendorOrders";
import Customers from "./pages/seller/Customers";
import Reports from "./pages/seller/Reports";
import VendorProfile from "./pages/seller/VendorProfile";
import VendorChangePassword from "./pages/seller/VendorChangePassword";
import TagProducts from "./pages/TagProducts";
import Logout from "./pages/customer/Logout";
import { CartContext } from "./pages/Context";
import { useState } from "react";
import ConfirmOrder from "./pages/ConfirmOrder";

const checkCart = localStorage.getItem("cartData");
// console.log(checkCart);

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  // console.log("cartData from CartContext:", cartData);
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/category/:category_slug/:category_id"
            element={<CategoryProducts />}
          />
          <Route path="/products/:tag" element={<TagProducts />} />

          <Route path="/products" element={<AllProducts />} />
          <Route
            path="/product/:product_slug/:product_id"
            element={<ProductDetail />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/confirm-order" element={<ConfirmOrder />} />

          {/* Customer */}
          <Route path="/customer/register" element={<Register />} />
          <Route path="/customer/login" element={<Login />} />
          <Route path="/customer/logout" element={<Logout />} />
          <Route path="/customer/dashboard" element={<Dashboard />} />
          <Route path="/customer/orders" element={<Orders />} />
          <Route path="/customer/wishlist" element={<Wishlist />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route
            path="/customer/change-password"
            element={<ChangePassword />}
          />
          <Route path="/customer/addresses" element={<AddressList />} />

          {/* Customer */}

          {/* Seller */}
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/orders" element={<VendorOrders />} />
          <Route path="/seller/customers" element={<Customers />} />
          <Route path="/seller/reports" element={<Reports />} />
          <Route path="/seller/profile" element={<VendorProfile />} />
          <Route
            path="/seller/change-passwor"
            element={<VendorChangePassword />}
          />

          {/* Seller */}

          {/* Order */}
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/order/failure" element={<OrderFailure />} />
          {/* Order */}
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
