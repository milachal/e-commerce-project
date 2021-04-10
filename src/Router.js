import React from 'react';
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home/Home'
import ProductsPage from './components/Products/ProductsPage'
import ProductPage from './components/Products/ProductPage'
import AddProduct from './components/admin/AddProduct'
import EditProduct from './components/admin/EditProduct'
import SearchUser from './components/admin/SearchUser'
import AccountPage from './components/Profile/AccountPage'
import SignUp from './components/Profile/SignUp'
import Login from './components/Profile/Login'
import Cart from './components/Cart/Cart'
import CheckoutPage from './components/Cart/CheckoutPage'
import OrderCompleted from './components/Orders/OrderCompleted'
import OrderPage from './components/Orders/OrderPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path ="/account/signup" component={SignUp} />
                <Route path ="/account/login" component={Login} />
                <Route path="/account/me" component={AccountPage} />
                <Route path="/admin/add-product" component={AddProduct} />
                <Route path="/admin/edit-product/:id" component={EditProduct} />
                <Route path="/admin/search-user" component={SearchUser} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/cart/checkout" component={CheckoutPage} />
                <Route path="/order/completed" component={OrderCompleted} />
                <Route path="/order/history/:id" component={OrderPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router