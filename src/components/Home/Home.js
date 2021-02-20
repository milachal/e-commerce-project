import React from 'react';
import Navigation from '../Navigation/Navigation';
import Featured from './Featured/Featured';
import Header from '../Header/Header'
import HomeCarousel from './HomeCarousel';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <HomeCarousel />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;