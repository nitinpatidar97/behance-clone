import React, { useState } from 'react';
import './NavBar.css'; 
import adobeLogo from './images/Adobe logo.png';
import Dropdown from './Dropdown';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

    const handleDropdownItemClick = (name) => {
        setActiveLink(name);
    };

    return (
        <header className="header">
            <div className="logo">Behance</div>
            <nav className="nav">
                <Dropdown
                    label="Explore"
                    options={[
                        'Search & Explore', 
                        'Curated Galleries', 
                        'Best of Behance', 
                        'Graphic Design', 
                        'Illustration', 
                        'Photography', 
                        'UI/UX', 
                        '3D Art'
                    ]}
                    activeLink={activeLink}
                    handleLinkClick={handleLinkClick}
                    handleDropdownItemClick={handleDropdownItemClick}
                />
                {['assets', 'jobs', 'Behance', 'Hire Freelancers'].map(link => (
                    <a
                        href="#"
                        key={link}
                        className={`nav-link ${activeLink === link ? 'active' : ''}`}
                        onClick={() => handleLinkClick(link)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                        {link === 'Behance' && <span className="pro-label"> PRO</span>}
                    </a>
                ))}
            </nav>
            <div className="auth">
                <button className="login">Log In</button>
                <button className="signup">Sign Up</button>
                <a href="#"><img src={adobeLogo} alt="Adobe logo" className="adobe-logo" /></a>
            </div>
        </header>
    );
};

export default NavBar;
