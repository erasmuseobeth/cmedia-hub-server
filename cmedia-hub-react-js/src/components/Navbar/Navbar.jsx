import React from 'react';
import { NavbarProvider } from './NavbarContext';
import NavTop from './NavTop';
import NavSidebar from './NavSidebar';

const Navbar = () => {
    return (
        <nav>
            <NavbarProvider>
                <NavTop />
                <NavSidebar />
            </NavbarProvider>
        </nav>
    );
};

export default Navbar;
