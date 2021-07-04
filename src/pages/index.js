import React, { useEffect } from 'react';
import Home from '../components/home';
import Seo from '../components/seo';
import '../styles/index.scss';
import ProjectPage from '../components/projects';
import About from '../components/about';
import Footer from '../components/footer';
// import { BrowserRouter as Router } from 'react-router-dom';

const IndexPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Seo title="Portfolio" />
            <Home />
            <About />
            <ProjectPage />
            <Footer />
        </>
    );
};

export default IndexPage;
