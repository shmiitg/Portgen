import React from "react";

const Education = ({ education, titleStyle }) => {
    return (
        <div className="education-container">
            <div style={titleStyle} className="preview__title">
                Education
            </div>
            {education.map((edu, index) => (
                <div key={index} className="education-details-container">
                    <div className="university">{edu.university}</div>
                    <div className="degree">{edu.degree}</div>
                </div>
            ))}
        </div>
    );
};

export default Education;
