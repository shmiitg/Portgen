import React from "react";
import "../Templates.css";
import classes from "./Developer.module.css";

const Experience = ({ experience, setExperience }) => {
    const handleChange = (i, e) => {
        let newFormValues = [...experience];
        newFormValues[i][e.target.name] = e.target.value;
        setExperience(newFormValues);
    };
    const addFormFields = () => {
        if (experience.length < 5) {
            setExperience([...experience, { company: "", description: "" }]);
        } else {
            window.alert("You can add upto 5 fields only");
        }
    };
    const removeFormFields = (i) => {
        let newFormValues = [...experience];
        newFormValues.splice(i, 1);
        setExperience(newFormValues);
    };

    return (
        <div className="section">
            <h2 className="title">Work and Experience Details</h2>
            <div className={classes["form-main"]}>
                {experience.map((element, index) => (
                    <div className={classes["form-container"]} key={index}>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>Company</div>
                            <input
                                required
                                type="text"
                                name="company"
                                value={element.company}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>Work Details</div>
                            <input
                                required
                                type="text"
                                name="description"
                                value={element.description}
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

export default Experience;
