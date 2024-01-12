import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavbar } from './NavbarContext';

const NavTopLeft = () => {

    const { toggleSidebar } = useNavbar();

    return ( 
        <div className="nav-left flex">
            <div className="nav-toggler-container">

            <FontAwesomeIcon 
                icon={faBars} 
                className=" nav-toggler icon" 
                id="nav-toggler"
                onClick ={ toggleSidebar }
             />

            </div>
            <div className="nav-logo-container">
                {/* <!-- <img src="" alt="" className="nav-logo" /> --> */}
                <span className="logo-text">cmedia-hub</span>
            </div>
        </div>
     );
}
 
export default NavTopLeft;