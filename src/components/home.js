import React from 'react';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import pdf_icon from '../images/pdf-icon.svg';
import logo from '../images/logo.png';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Home = () => {
    return (
        <div className="wrapper">
            <nav>
                <img className="logo-img" src={logo} alt="Brian Yao" />
                <div className="page-links">
                    <button onClick={() => scrollTo('#about-section')}>
                        About
                    </button>
                    <button onClick={() => scrollTo('#projects-section')}>
                        Projects
                    </button>
                </div>
            </nav>
            <div className="intro">
                <h1 className="my-name">Brian Yao</h1>
                <p>Web Developer &amp; Data Scientist</p>
                <div className="socials">
                    <a
                        href="./"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img alt="LinkedIn" src={linkedin} />
                    </a>
                    <a
                        href="./"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img alt="Github" src={github} />
                    </a>
                    <a href="./" target="_blank" rel="noopener noreferrer">
                        <img alt="PDF" src={pdf_icon} />
                    </a>
                </div>
                <svg className="arrow">
                    <path className="a1" d="M0 0 L30 22 L60 0"></path>
                    <path className="a2" d="M0 20 L30 42 L60 20"></path>
                    <path className="a3" d="M0 40 L30 62 L60 40"></path>
                </svg>
            </div>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};
export default Home;
