import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'



const Main = () => {
    return (
        <div className='bg '>
            <Header></Header>
            <div className='footer'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;