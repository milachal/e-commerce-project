import React from 'react';
import Products from '../products/products';
import AdminNavigation from './adminNavigation';
import AdminHeader from './adminHeader';

const AdminPage = () => (
  <>
    <AdminNavigation />
    <AdminHeader />
    <Products />
  </>
);

export default AdminPage;
