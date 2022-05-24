import React from "react";

const Personal = ({ personal, titleStyle }) => {
    return (
        <div className="personal-container">
            <div style={titleStyle} className="preview__title">
                Personal
            </div>
            <div className="personal-details-container">
                <div className="persoanl__name">{personal.name}</div>
                <div className="persoanl__email">{personal.email}</div>
                <div className="persoanl__github">{personal.github}</div>
                <div className="persoanl__linkedin">{personal.linkedin}</div>
            </div>
        </div>
    );
};

export default Personal;
