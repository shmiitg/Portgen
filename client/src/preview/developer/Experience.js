import React from "react";

const Experience = ({ experience }) => {
    return (
        <div className="experience-container">
            <div className="title">Work and Experience</div>
            {experience.map((exp, index) => (
                <div key={index} className="experience-details-container">
                    <div className="company">{exp.company}</div>
                    <div className="description">{exp.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
