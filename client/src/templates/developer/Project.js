import React from "react";
import "../Templates.css";
import classes from "./Developer.module.css";

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
        <div className="section">
            <h2 className="title">Projects</h2>
            <div className={classes["form-main"]}>
                {project.map((element, index) => (
                    <div className={classes["form-container"]} key={index}>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>Title</div>
                            <input
                                required
                                type="text"
                                name="title"
                                value={element.title}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>Link</div>
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
                                className="remove"
                                onClick={() => removeFormFields(index)}
                            >
                                Remove
                            </button>
                        ) : null}
                        <div className="period">
                            <label htmlFor=""></label>
                        </div>
                    </div>
                ))}
                <div className="button-section">
                    <button className="button add" type="button" onClick={() => addFormFields()}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
