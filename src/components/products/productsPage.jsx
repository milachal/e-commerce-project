import React, { useContext } from 'react';
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import Footer from '../footer/footer';
import Products from './products';
import AdminPage from '../admin/adminPage';
import AuthContext from '../../contexts/authContext';

const ProductsPage = () => {
  const { isUserLoggedIn, userStatus } = useContext(AuthContext);
  return (
    <div>
      {isUserLoggedIn && userStatus === 'admin' ? (
        <AdminPage />) : (
          <>
            <Navigation />
            <Header />
            <Products />
            <Footer />
          </>
      )}
    </div>
  );
};

export default ProductsPage;
