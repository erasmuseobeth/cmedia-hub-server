import React from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Navbar from '@components/Navbar';


const BaseLayout = () => {
    return(
        <>
         {/* <header class="hero-landing">
        //     <div class="hero">
        //         <img src="../statics/images/img1.png" alt="" class="hero-img" id="hero-img1">
        //         <div class="cta flex-wr flex-cc card">
        //             <div class="cta-txt">Watch Manage Access and Share your Media  with ease at Home all stored in one Home server!!!</div>
        //             <button class="cta-btn nav-link">Watch</button>
        //             <button class="cta-btn nav-link" id="explore">Explore</button>
        //         </div>
        //     </div>
         </header> */}
        <Navbar />
        <Outlet />
        <Footer />
        {/* <script src="../assets/js/cmedia-hub.js"></script>
        <script src="../assets/js/upload.js"></script> */}

        </>

    );
};

export default BaseLayout ;


