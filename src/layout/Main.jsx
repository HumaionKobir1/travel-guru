import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;