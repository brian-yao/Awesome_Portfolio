import React from 'react';
import projectData from '../content/project_data';
// import {motion} from 'framer-motion';

const Project = ({ title, description, image, id }) => {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="img-container">
                <img src={image} alt="project" />
            </div>
        </div>
    );
};

const ProjectPage = () => {
    return (
        <div className="projects-container">
            <h1 id="header">Projects</h1>
            <div className="project-content">
                {projectData.map((proj) => {
                    return (
                        <Project
                            title={proj.title}
                            description={proj.description}
                            image={proj.image}
                            key={proj.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectPage;
