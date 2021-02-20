import React from 'react';
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Account from './components/Profile/Account'
import ProductPage from './components/Products/ProductPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/account" component={Account} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router