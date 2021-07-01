import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/home/home';
import ProductsPage from './components/products/productsPage';
import ProductPage from './components/products/productPage';
import AddProduct from './components/admin/addProduct';
import EditProduct from './components/admin/editProduct';
import SearchUser from './components/admin/searchUser';
import AccountPage from './components/profile/accountPage';
import SignUp from './components/profile/signUp';
import Login from './components/profile/login';
import Cart from './components/cart/cart';
import CheckoutPage from './components/cart/checkoutPage';
import OrderCompleted from './components/orders/orderCompleted';
import OrderPage from './components/orders/orderPage';
import AdminProfilePage from './components/admin/adminProfilePage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/account/signup" component={SignUp} />
      <Route path="/account/login" component={Login} />
      <Route path="/account/me" component={AccountPage} />
      <Route path="/admin/account/me" component={AdminProfilePage} />
      <Route path="/admin/add-product" component={AddProduct} />
      <Route path="/admin/edit-product/:id" component={EditProduct} />
      <Route path="/admin/search-user" component={SearchUser} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/cart/checkout" component={CheckoutPage} />
      <Route path="/order/completed" component={OrderCompleted} />
      <Route path="/order/history/:id" component={OrderPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
