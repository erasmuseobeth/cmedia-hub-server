import React from 'react';
import { Outlet, useRoutes, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { routes } from '../components/App';

// import Navbar from '@components/Navbar';


const BaseLayout = () => {
    const navigate = useNavigate();

    const isHomeRoute = window.location.pathname === '/';
  
    // const element = useRoutes(routes);

    return(
        <>
        <Navbar />
        {/* Conditionally render the Header only for the home route */}
        {/* {element && element.props?.path === '/' && <Header />} */}
        {isHomeRoute && <Header />}
        {/* <main> */}
        <Outlet />
        {/* </main> */}
        <Footer />


        </>

    );
};

export default BaseLayout ;


