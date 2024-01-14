import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp,faFacebook,faDiscord,faTiktok,faYoutube, faReddit, } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <footer class="footer flex-wr">
            <div class="footer-card">
                <h2 class="footer-heading">Account</h2>
                <Link to="/login" class="footer-link">Login</Link>
                <Link to="/signup" class="footer-link">Register</Link>
                <Link to="/account-recovery" class="footer-link">Forgot password</Link>
                <Link to="/support" class="footer-link">Support</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading">About</h2>
                <Link to="/about" class="footer-link">Cmedia-hub</Link>
                <Link to="/about" class="footer-link">Support</Link>
                <Link to="/about" class="footer-link">Project</Link>
                <Link to="/about" class="footer-link">Cyber330d</Link>
                <Link to="/about" class="footer-link">Documentation</Link>

            </div>
            <div class="footer-card">
                <h2 class="footer-heading">Libraries</h2>
                <Link to="/explore" class="footer-link">Videos</Link>
                <Link to="/explore" class="footer-link">Audio</Link>
                <Link to="/explore" class="footer-link">Images</Link>
                <Link to="/explore" class="footer-link">Movies</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading">Unknown</h2>
                <Link to="" class="footer-link">Playlist</Link>
                <Link to="" class="footer-link">Categories</Link>
                <Link to="" class="footer-link">Stream</Link>
                <Link to="" class="footer-link">Upload</Link>
                <Link to="" class="footer-link">Download</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading">Unknown</h2>
                <Link to="" class="footer-link">Playlist</Link>
                <Link to="" class="footer-link">Categories</Link>
                <Link to="" class="footer-link">Stream</Link>
                <Link to="" class="footer-link">Upload</Link>
                <Link to="" class="footer-link">Download</Link>
            </div> 
            <div class="footer-card social flex">
                <h2 class="footer-heading">Follow Us On</h2>
                <Link to="http://www.youtube.com" class="footer-link">
                    <FontAwesomeIcon icon={faYoutube} className='icon social-icon'/>
                </Link>
                <Link to="http://www.facebook.com" class="footer-link">
                    <FontAwesomeIcon icon={faFacebook} className='icon social-icon'/>
                </Link>
                <Link to="http://www.whatsapp.com" class="footer-link">
                    <FontAwesomeIcon icon={faWhatsapp} className='icon social-icon'/>
                </Link>
                <Link to="http://www.reddis.com" class="footer-link">
                    <FontAwesomeIcon icon={faReddit} className='icon social-icon'/>
                </Link>
                <Link to="http://www.tiktok.com" class="footer-link">
                    <FontAwesomeIcon icon={faTiktok} className='icon social-icon'/>
                </Link>
                <Link to="http://www.discord.com" class="footer-link">
                    <FontAwesomeIcon icon={faDiscord} className='icon social-icon'/>
                    <i class="fa-brands fa-discord"></i>
                </Link>
            </div>
            <div class="footer-card copyright neon">
                <p class="neon-txt">Developed by <Link to="." class="copyright-text neon-txt">cyber330d</Link></p>
            </div>
        </footer>
    );
};

export default Footer  ;