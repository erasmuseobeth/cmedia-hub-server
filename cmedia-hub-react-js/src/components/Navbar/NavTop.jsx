import React from 'react';
import NavTopRight from './NavTopRight';
import NavTopLeft from './NavTopLeft';
import NavMiddle from './NavMiddle';


const NavTop = () => {
    return ( 
        <div className="nav-top flex-sb">
            <NavTopLeft />
            <NavMiddle />
            <NavTopRight />
        </div>
     );
}
 
export default NavTop;