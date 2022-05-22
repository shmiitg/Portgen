import React from "react";

const Project = ({ project }) => {
    return (
        <div className="project-container">
            <div className="title">Projects</div>
            {project.map((pro, index) => (
                <div key={index} className="project-details-container">
                    <div className="title">{pro.title}</div>
                    <div className="link">{pro.link}</div>
                </div>
            ))}
        </div>
    );
};

export default Project;
