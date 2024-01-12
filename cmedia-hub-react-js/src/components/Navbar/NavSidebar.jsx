import React from "react";
import { Link } from 'react-router-dom';
import { useNavbar } from "./NavbarContext";

const NavSidebar = () => {

    const { isSidebarVisible } = useNavbar();

    return isSidebarVisible ? (
        
        <div
        id="nav-sidebar"
        className='nav-sidebar card flex-col scrollable'>
        <Link to="#" className="nav-link"><i className="fas fa-house active"></i>Home</Link>
        <Link to="#" className="nav-link"><i className="fas fa-user"></i>Profile</Link>
        <Link to="#" className="nav-link"><i className="fas fa-compass"></i>Stream</Link>
        <Link to="#" className="nav-link"><i className="fas fa-compass"></i>Upload</Link>
        <Link to="#" className="nav-link"><i className="fas fa-compass"></i>Download</Link>
        <Link to="#" className="nav-link"><i className="fas fa-compass"></i>Explore</Link>
        <Link to="#" className="nav-link"><i className="fas fa-video"></i>Library</Link>
        <Link to="#" className="nav-link"><i className="fas fa-house"></i>Playlists</Link>
        <Link to="#" className="nav-link"><i className="fas fa-file-video"></i>Movies</Link>
        <Link to="#" className="nav-link"><i className="fas fa-video-camera"></i>Videos</Link>
        <Link to="#" className="nav-link"><i className="fas fa-music"></i>Music</Link>
        <Link to="#" className="nav-link"><i className="fas fa-photo-video"></i>Photos</Link>
        <Link to="#" className="nav-link"><i className="fas fa-clock-rotate-left"></i>History</Link>
        <Link to="#" className="nav-link"><i className="fas fa-gear"></i>Settings</Link>
    </div>
      ) : null;

};

export default NavSidebar;
