import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
    const date = new Date();
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="Byao" />
            <h2>Made by Brian Yao &copy;{date.getFullYear()}</h2>
        </div>
    );
};
export default Footer;
