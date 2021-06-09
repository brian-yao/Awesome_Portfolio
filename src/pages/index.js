import * as React from 'react';
import Background from '../components/background';
import Seo from '../components/seo';
import '../styles/index.scss';
import ProjectPage from '../components/projects';
import About from '../components/about';
import Footer from '../components/footer';

const IndexPage = () => {
    return (
        <div>
            <Seo title="Home" />
            <Background />
            <About />
            <ProjectPage />
            <Footer />
        </div>
    );
};

export default IndexPage;
