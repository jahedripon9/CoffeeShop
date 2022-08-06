import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import OrderNow from '../OrderNow/OrderNow';
import Header from '../Share/Header';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <LandingPage></LandingPage>
            <OrderNow></OrderNow>
        </div>
    );
};

export default Home;