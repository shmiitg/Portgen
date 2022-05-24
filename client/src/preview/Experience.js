import React from "react";

const Experience = ({ experience, titleStyle }) => {
    return (
        <div className="experience-container">
            <div style={titleStyle} className="preview__title">
                Work and Experience
            </div>
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
