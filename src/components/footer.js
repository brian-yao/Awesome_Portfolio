import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="Byao" />
            <h2>Made by Brian Yao &copy;2021</h2>
        </div>
    );
};
export default Footer;
