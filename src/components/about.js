import React, { useState } from 'react';
import aboutData from '../content/about_data';

const About = () => {
    const [info, setInfo] = useState(aboutData());
    const text = info.filter((i) => i.active === true)[0]['text'];
    const eventHandler = (name) => {
        const selected = info.map((item) => {
            if (item.section === name) {
                return {
                    ...item,
                    active: true,
                };
            } else {
                return {
                    ...item,
                    active: false,
                };
            }
        });
        setInfo(selected);
    };

    return (
        <div className="about-container">
            <h3>About Me</h3>
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="nav-buttons">
                <button onClick={() => eventHandler('About')}>About</button>
                <button onClick={() => eventHandler('Experience')}>
                    Experience
                </button>
                <button onClick={() => eventHandler('Skills')}>Skills</button>
            </div>
        </div>
    );
};

export default About;
