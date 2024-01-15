import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse,faUser,faCompass,faClockRotateLeft,faVideo,faFileVideo,faVideoCamera,faMusic,faPhotoVideo,faGear } from '@fortawesome/free-solid-svg-icons';

import { useNavbar } from "./NavbarContext";

const NavSidebar = () => {

    const { isSidebarVisible } = useNavbar();

    return isSidebarVisible ? (
        <div id="nav-sidebar"
            className='nav-sidebar card flex-col scrollable'>

            <NavLink to="/" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faHouse} className='icon'/>
                Home
            </NavLink>

            <NavLink to="profile" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faUser} className='icon'/>
                Profile
            </NavLink>

            <NavLink to="stream" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faCompass} className='icon'/>
                Stream
            </NavLink>

            <NavLink to="upload" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faCompass} className='icon'/>
                Upload
            </NavLink>

            <NavLink to="download" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faCompass} className='icon'/>
                Download
            </NavLink>

            <NavLink to="explore" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faCompass} className='icon'/>
                Explore
            </NavLink>

            <NavLink to="library" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faVideo} className='icon'/>
                Library
            </NavLink>

            <NavLink to="playlists" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faHouse} className='icon'/>
                Playlists
            </NavLink>

            <NavLink to="movies" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faFileVideo} className='icon'/>
                Movies
            </NavLink>

            <NavLink to="videos" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faVideoCamera} className='icon'/>
                Videos
            </NavLink>

            <NavLink to="music" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faMusic} className='icon'/>
                Music
            </NavLink>

            <NavLink to="photos" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faPhotoVideo} className='icon'/>
                Photos
            </NavLink>

            <NavLink to="history" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faClockRotateLeft} className='icon'/>
                History
            </NavLink>

            <NavLink to="settings" className="nav-link"  exact activeClassName="active">
                <FontAwesomeIcon icon={faGear} className='icon'/>
                Settings
            </NavLink>

        </div>
      ) : null;

};

export default NavSidebar;
