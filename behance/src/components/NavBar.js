import React, { useState } from 'react';
import './NavBar.css'; // Ensure this path is correct
import adobeLogo from './images/Adobe logo.png';

const NavBar = () => {
    const [dropdown, setDropdown] = useState('');
    const [activeLink, setActiveLink] = useState('');

    const handleDropdown = (name) => {
        setDropdown(dropdown === name ? '' : name);
    };

    const handleLinkClick = (name) => {
        setActiveLink(name);
        if (name === 'explore') {
            handleDropdown(name);
        } else {
            setDropdown('');
        }
    };

    const handleDropdownItemClick = (name) => {
        setActiveLink(name);
    };

    return (
        <header className="header">
            <div className="logo">Behance</div>
            <nav className="nav">
                <a
                    href="#"
                    className={`nav-link ${activeLink === 'explore' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('explore')}
                >
                    Explore <span className="arrow">&#9662;</span>
                </a>
                {dropdown === 'explore' && (
                    <div className="dropdown-content">
                        {['Search & Explore', 'Curated Galleries', 'Best of Behance', 'Graphic Design', 'Illustration', 'Photography', 'UI/UX', '3D Art'].map(item => (
                            <a
                                href="#"
                                key={item}
                                className={activeLink === item ? 'active' : ''}
                                onClick={() => handleDropdownItemClick(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
                {['assets', 'jobs', 'pro', 'hire'].map(link => (
                    <a
                        href="#"
                        key={link}
                        className={`nav-link ${activeLink === link ? 'active' : ''}`}
                        onClick={() => handleLinkClick(link)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                        {link === 'pro' && <span className="pro-label"> PRO</span>}
                    </a>
                ))}
            </nav>
            <div className="auth">
                <button className="login">Log In</button>
                <button className="signup">Sign Up</button>
                <a href="#"><img  src= "Adobe logo.png" alt="Adobelogo" className="logo" /></a>
            </div>
        </header>
    );
};

export default NavBar;
