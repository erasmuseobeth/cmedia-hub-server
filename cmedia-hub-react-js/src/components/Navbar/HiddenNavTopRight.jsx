import React from "react";
import { Link } from 'react-router-dom';

    const HiddenNavTopRight = () => {
        return ( 
            <div className="hidden flex-col card g-card" id="more-nav-right-hidden">
                    <Link to="#" className="nav-link">Home</Link>
                    <Link to="#" className="nav-link">Explore</Link>
                    <Link to="#" className="nav-link">Login</Link>
                    <Link to="#" className="nav-link">Register</Link>
                    <Link to="#" className="nav-link">Support</Link>
                    <Link to="#" className="nav-link">Contact</Link>
                    <Link to="#" className="nav-link">About</Link>
                </div>
         );
    }
     
    export default HiddenNavTopRight;