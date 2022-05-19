import React from "react";
import "../Templates.css";
import { FaTrash } from "react-icons/fa";

const Project = ({ project, setProject }) => {
    const handleChange = (i, e) => {
        let newFormValues = [...project];
        newFormValues[i][e.target.name] = e.target.value;
        setProject(newFormValues);
    };
    const addFormFields = () => {
        if (project.length < 5) {
            setProject([...project, { title: "", link: "" }]);
        } else {
            window.alert("You can add upto 5 fields only");
        }
    };
    const removeFormFields = (i) => {
        let newFormValues = [...project];
        newFormValues.splice(i, 1);
        setProject(newFormValues);
    };

    return (
        <div className="template__section">
            <h2>Projects</h2>
            <div className="template__form__container">
                {project.map((element, index) => (
                    <div className="template__form" key={index}>
                        <div className="template__form__fields">
                            <div className="template__form__title">Title</div>
                            <input
                                required
                                type="text"
                                name="title"
                                value={element.title}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div className="template__form__fields">
                            <div className="template__form__title">Link</div>
                            <input
                                required
                                type="text"
                                name="link"
                                value={element.link}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        {index ? (
                            <button
                                type="button"
                                className="template__remove__button"
                                onClick={() => removeFormFields(index)}
                            >
                                <FaTrash />
                            </button>
                        ) : null}
                    </div>
                ))}
                <div className="template__add__button">
                    <button onClick={() => addFormFields()}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Project;
