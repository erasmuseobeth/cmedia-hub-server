import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-top flex-sb">
                <div className="nav-left flex">
                    <div className="nav-toggler-container">
                    <i className="fas fa-bars nav-toggler" id="nav-toggler"></i>
                    </div>
                    <div className="nav-logo-container">
                        {/* <!-- <img src="" alt="" className="nav-logo" /> --> */}
                        <span className="logo-text">cmedia-hub</span>
                    </div>
                </div>

                <div className="search-container flex-cc">
                    <input type="search" name="search-query" className="search-bar" id="search" />
                    <span className="search-icon" id="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>

                <div className="nav-right flex">
                <Link to="" className="nav-link">Home</Link>
                <Link to="upload" className="nav-link">Upload</Link>
                <Link to="stream" className="nav-link">Stream</Link>
                <Link to="explore" className="nav-link">Explore</Link>
                <Link to="login" className="nav-link">Login</Link>
                    <i className="fas fa-ellipsis-vertical more-nav-right" id="more-nav-right">
                        <div className="hidden flex-col card g-card" id="more-nav-right-hidden">
                        <Link to="#" className="nav-link">Home</Link>
                        <Link to="#" className="nav-link">Explore</Link>
                        <Link to="#" className="nav-link">Login</Link>
                        <Link to="#" className="nav-link">Register</Link>
                        <Link to="#" className="nav-link">Support</Link>
                        <Link to="#" className="nav-link">Contact</Link>
                        <Link to="#" className="nav-link">About</Link>
                        </div>
                    </i>
                </div>
            </div>    
            <div className="nav-sidebar card flex-col scrollable" id="nav-sidebar">
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
        </nav>
    );
};

export default Navbar  ;