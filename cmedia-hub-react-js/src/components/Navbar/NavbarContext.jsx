import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isHiddenNavVisible, setIsHiddenNavVisible] = useState(false);


    const toggleSidebar = () => {
            console.log('Toggle Sidebar Clicked');
            // Your existing logic to toggle the sidebar
        setIsSidebarVisible((prev) => !prev);
    };

    const toggleHiddenNav = () => {
        console.log('Toggle Sidebar Clicked');
        // Your existing logic to toggle the sidebar
    setIsHiddenNavVisible((prev) => !prev);
    };

    return (
        <NavbarContext.Provider value={{ isSidebarVisible, toggleSidebar, isHiddenNavVisible, toggleHiddenNav }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => {
    return useContext(NavbarContext);
};
