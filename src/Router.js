import React from 'react';
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home/Home'
import ProductsPage from './components/Products/ProductsPage'
import ProductPage from './components/Products/ProductPage'
import AdminPage from './components/admin/AdminPage'
import AddProduct from './components/admin/AddProduct'
import EditProduct from './components/admin/EditProduct'
import AccountPage from './components/Profile/AccountPage'
import SignUp from './components/Profile/SignUp'
import Login from './components/Profile/Login'
import Cart from './components/Cart/Cart'

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
                <Route exact path="/admin" component={AdminPage} />
                <Route path="/admin/edit-product/:id" component={EditProduct} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router