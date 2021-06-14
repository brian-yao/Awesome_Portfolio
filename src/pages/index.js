import * as React from 'react';
import Home from '../components/home';
import Seo from '../components/seo';
import '../styles/index.scss';
import ProjectPage from '../components/projects';
import About from '../components/about';
import Footer from '../components/footer';

const IndexPage = () => {
    return (
        <div>
            <Seo title="Portfolio" />
            <Home />
            <About />
            <ProjectPage />
            <Footer />
        </div>
    );
};

export default IndexPage;
