import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp,faFacebook,faDiscord,faTiktok,faYoutube, faReddit, } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <footer className="footer flex-wr">
            <div className="footer-card">
                <h2 className="footer-heading">Account</h2>
                <Link to="/login" className="footer-link">Login</Link>
                <Link to="/signup" className="footer-link">Register</Link>
                <Link to="/account-recovery" className="footer-link">Forgot password</Link>
                <Link to="/support" className="footer-link">Support</Link>
            </div>
            <div className="footer-card">
                <h2 className="footer-heading">About</h2>
                <Link to="/about" className="footer-link">Cmedia-hub</Link>
                <Link to="/about" className="footer-link">Support</Link>
                <Link to="/about" className="footer-link">Project</Link>
                <Link to="/about" className="footer-link">Cyber330d</Link>
                <Link to="/about" className="footer-link">Documentation</Link>

            </div>
            <div className="footer-card">
                <h2 className="footer-heading">Libraries</h2>
                <Link to="/explore" className="footer-link">Videos</Link>
                <Link to="/explore" className="footer-link">Audio</Link>
                <Link to="/explore" className="footer-link">Images</Link>
                <Link to="/explore" className="footer-link">Movies</Link>
            </div>
            <div className="footer-card">
                <h2 className="footer-heading">Unknown</h2>
                <Link to="" className="footer-link">Playlist</Link>
                <Link to="" className="footer-link">Categories</Link>
                <Link to="" className="footer-link">Stream</Link>
                <Link to="" className="footer-link">Upload</Link>
                <Link to="" className="footer-link">Download</Link>
            </div>
            <div className="footer-card">
                <h2 className="footer-heading">Unknown</h2>
                <Link to="" className="footer-link">Playlist</Link>
                <Link to="" className="footer-link">Categories</Link>
                <Link to="" className="footer-link">Stream</Link>
                <Link to="" className="footer-link">Upload</Link>
                <Link to="" className="footer-link">Download</Link>
            </div> 
            <div className="footer-card social flex">
                <h2 className="footer-heading">Follow Us On</h2>
                <Link to="http://www.youtube.com" className="footer-link">
                    <FontAwesomeIcon icon={faYoutube} className='icon social-icon'/>
                </Link>
                <Link to="http://www.facebook.com" className="footer-link">
                    <FontAwesomeIcon icon={faFacebook} className='icon social-icon'/>
                </Link>
                <Link to="http://www.whatsapp.com" className="footer-link">
                    <FontAwesomeIcon icon={faWhatsapp} className='icon social-icon'/>
                </Link>
                <Link to="http://www.reddis.com" className="footer-link">
                    <FontAwesomeIcon icon={faReddit} className='icon social-icon'/>
                </Link>
                <Link to="http://www.tiktok.com" className="footer-link">
                    <FontAwesomeIcon icon={faTiktok} className='icon social-icon'/>
                </Link>
                <Link to="http://www.discord.com" className="footer-link">
                    <FontAwesomeIcon icon={faDiscord} className='icon social-icon'/>
                    <i className="fa-brands fa-discord"></i>
                </Link>
            </div>
            <div className="footer-card copyright neon">
                <p className="neon-txt">Developed by <Link to="." className="copyright-text neon-txt">cyber330d</Link></p>
            </div>
        </footer>
    );
};

export default Footer  ;