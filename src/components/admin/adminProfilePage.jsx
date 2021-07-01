import React, { useContext } from 'react';
import AdminNavigation from './adminNavigation';
import AdminHeader from './adminHeader';
import AuthContext from '../../contexts/authContext';

const AdminProfilePage = () => {
  const { userStatus } = useContext(AuthContext);
  return (
    <>
      {userStatus === 'admin' ? (
        <>
          <AdminNavigation />
          <AdminHeader />
        </>
      ) : <h3>No permission</h3> }
    </>
  );
};

export default AdminProfilePage;
