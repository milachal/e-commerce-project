import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import Featured from './Featured/Featured';
import Header from '../Header/Header'
import HomeCarousel from './HomeCarousel';
import Footer from '../Footer/Footer';
import AdminNavigation from '../admin/AdminNavigation'
import AdminHeader from '../admin/AdminHeader'
import AuthContext from '../../contexts/AuthContext'

const Home = () => {

    const { isUserLoggedIn, userStatus } = useContext(AuthContext)

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