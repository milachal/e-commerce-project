import React, { useContext } from 'react';
import Navigation from '../navigation/navigation';
import Featured from './featured/featured';
import Header from '../header/header';
import HomeCarousel from './homeCarousel';
import Footer from '../footer/footer';
import AdminNavigation from '../admin/adminNavigation';
import AdminHeader from '../admin/adminHeader';
import AuthContext from '../../contexts/authContext';

const Home = () => {
  const { isUserLoggedIn, userStatus } = useContext(AuthContext);

  return (
    <div>
      {isUserLoggedIn && userStatus === 'admin' ? (
        <>
          <AdminNavigation />
          <AdminHeader />
        </>
      ) : (
        <>
          <Navigation />
          <Header />
        </>
      )}
      <HomeCarousel />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
