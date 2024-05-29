import React from 'react';
import './Footer.css';
import adobeLogo from './images/Adobe logo.png';
const Footer = () => {
    return (
        <div style={{paddingTop:"50px"}}>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Built For Creatives</h4>
                    <a href="#">Try Behance Pro</a>
                    <a href="#">Find Inspiration</a>
                    <a href="#">Get Hired</a>
                    <a href="#">Sell Creative Assets</a>
                    <a href="#">Sell Freelance Services</a>
                </div>
                <div className="footer-column">
                    <h4>Find Talent</h4>
                    <a href="#">Post a Job</a>
                    <a href="#">All Featured Freelance Designers</a>
                    <a href="#">Graphic Designers</a>
                    <a href="#">Photographers</a>
                    <a href="#">Video Editors</a>
                    <a href="#">Web Designers</a>
                    <a href="#">Illustrators</a>
                </div>
                <div className="footer-column">
                    <h4>Behance</h4>
                    <a href="#">About Behance</a>
                    <a href="#">Adobe Portfolio</a>
                    <a href="#">Download the App</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-column">
                    <h4>Social</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={adobeLogo} alt="Adobe logo"  className="adobe-logo" />
                <p>© 2024 Adobe Inc. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">English</a>
                    <a href="#">TOU</a>
                    <a href="#">Privacy</a>
                    <a href="#">Community</a>
                    <a href="#">Cookie preferences</a>
                    <a href="#">Do not sell or share my personal information</a>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
