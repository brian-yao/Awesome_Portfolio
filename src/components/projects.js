import React, { useRef } from 'react';
import projectData from '../content/project_data';
import { motion } from 'framer-motion';
import Modal from '../components/modal';

const Project = ({ title, description, image, id }) => {
    const modal = useRef(null);
    return (
        <motion.div className="project-card" whileHover={{ scale: 1.1 }}>
            <h2>{title}</h2>
            <div className="button-test">
                <button onClick={() => modal.current.open()}>
                    Click to View
                </button>
            </div>
            <div className="img-container">
                <img src={image} alt="project" />
            </div>
            <Modal ref={modal}>{description}</Modal>
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
                            key={proj.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectPage;
