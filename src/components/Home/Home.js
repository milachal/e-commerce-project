import React from 'react';
import { useAuth } from '../../hooks'
import Navigation from '../Navigation/Navigation';
import Featured from './Featured/Featured';
import Header from '../Header/Header'
import HomeCarousel from './HomeCarousel';
import Footer from '../Footer/Footer';
import AdminNavigation from '../admin/AdminNavigation'
import AdminHeader from '../admin/AdminHeader'


const Home = () => {

    const [login, userStatus] = useAuth()

    return (
        <div>
            {login && userStatus === 'admin' ? (
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