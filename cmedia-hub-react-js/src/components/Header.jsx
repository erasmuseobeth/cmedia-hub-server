import React from "react";
import Image from '../components/Image';


const Header = () => {
    return ( 
        <header class="hero-landing">
            <div class="hero">
                <Image name='img1.png' alt="image" className="hero-img" id="hero-img1" />
                <div class="cta flex-wr flex-cc card">
                    <div class="cta-txt">Watch Manage Access and Share your Media  with ease at Home all stored in one Home server!!!</div>
                    <button class="cta-btn nav-link">Watch</button>
                    <button class="cta-btn nav-link" id="explore">Explore</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;