import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer class="footer flex-wr">
            <div class="footer-card">
                <h2 class="footer-heading">Account</h2>
            <Link to="" class="footer-link">Login</Link>
            <Link to="" class="footer-link">Register</Link>
            <Link to="" class="footer-link">Forgot password</Link>
            <Link to="" class="footer-link">Support</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading">About</h2>
            <Link to="" class="footer-link">Cmedia-hub</Link>
            <Link to="" class="footer-link">Support</Link>
            <Link to="" class="footer-link">Project</Link>
            <Link to="" class="footer-link">Cyber330d</Link>
            <Link to="" class="footer-link">Documentation</Link>

            </div>
            <div class="footer-card">
                <h2 class="footer-heading">Libraries</h2>
            <Link to="" class="footer-link">Videos</Link>
            <Link to="" class="footer-link">Audio</Link>
            <Link to="" class="footer-link">Images</Link>
            <Link to="" class="footer-link">Movies</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading"></h2>
            <Link to="" class="footer-link">Playlist</Link>
            <Link to="" class="footer-link">Categories</Link>
            <Link to="" class="footer-link">Stream</Link>
            <Link to="" class="footer-link">Upload</Link>
            <Link to="" class="footer-link">Download</Link>
            </div>
            <div class="footer-card">
                <h2 class="footer-heading"></h2>
            <Link to="" class="footer-link">Playlist</Link>
            <Link to="" class="footer-link">Categories</Link>
            <Link to="" class="footer-link">Stream</Link>
            <Link to="" class="footer-link">Upload</Link>
            <Link to="" class="footer-link">Download</Link>
            </div> 
            <div class="footer-card social flex">
                <h2 class="footer-heading">Follow Us On</h2>
            <Link to="http://www.youtube.com" class="footer-link"><i class="fa-brands fa-youtube"></i></Link>
            <Link to="http://www.facebook.com" class="footer-link"><i class="fa-brands fa-facebook"></i></Link>
            <Link to="http://www.whatsapp.com" class="footer-link"><i class="fa-brands fa-whatsapp"></i></Link>
            <Link to="http://www.reddis.com" class="footer-link"><i class="fa-brands fa-reddit"></i></Link>
            <Link to="http://www.tiktok.com" class="footer-link"><i class="fa-brands fa-tiktok"></i></Link>
            <Link to="http://www.discord.com" class="footer-link"><i class="fa-brands fa-discord"></i></Link>
            </div>
            <div class="footer-card copyright neon">
                <p class="neon-txt">Developed by <Link to="" class="copyright-text neon-txt">cyber330d</Link></p>
            </div>
        </footer>
    );
};

export default Footer  ;