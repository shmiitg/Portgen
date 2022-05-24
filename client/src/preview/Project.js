import React from "react";

const Project = ({ project, titleStyle }) => {
    return (
        <div className="project-container">
            <div style={titleStyle}>Projects</div>
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
