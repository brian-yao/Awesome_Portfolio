import React from 'react';
import projectData from '../content/project_data';
import { motion } from 'framer-motion';

const Project = ({ title, image, demo, id }) => {
    console.log(demo);
    return (
        <motion.div className="project-card" whileHover={{ scale: 1.1 }}>
            <h2>{title}</h2>
            <div className="demo">
                <a href={demo} target="_blank" rel="noreferrer">
                    Click here to demo
                </a>
            </div>
            <div className="img-container">
                <img src={image} alt="project" />
            </div>
        </motion.div>
    );
};

const ProjectPage = () => {
    return (
        <div className="projects-container">
            <h1 id="projects-section">Projects</h1>
            <div className="project-content">
                {projectData.map((proj) => {
                    return (
                        <Project
                            title={proj.title}
                            description={proj.description}
                            image={proj.image}
                            demo={proj.demo}
                            key={proj.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectPage;
