import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavbar } from "./NavbarContext";
import HiddenNavTopRight from './HiddenNavTopRight';



const  NavTopRight = () => {

    const { toggleHiddenNav, isHiddenNavVisible } = useNavbar();


    return ( 
        <div className="nav-right flex">
            <Link to="" className="nav-link">Home</Link>
            <Link to="upload" className="nav-link">Upload</Link>
            <Link to="stream" className="nav-link">Stream</Link>
            <Link to="explore" className="nav-link">Explore</Link>
            <Link to="login" className="nav-link">Login</Link>
            <FontAwesomeIcon icon={faEllipsisVertical} className="more-nav-right icon" id="more-nav-right" onClick ={ toggleHiddenNav } onMouseOver = {toggleHiddenNav} onMouseOut={toggleHiddenNav}/>
            {/* <HiddenNavTopRight /> */}
            { isHiddenNavVisible ? <HiddenNavTopRight /> : null}
        </div>
     );
}
 
export default NavTopRight ;