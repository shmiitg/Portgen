import React from "react";
import "../Templates.css";
import classes from "./Developer.module.css";

const Education = ({ education, setEducation }) => {
    const handleChange = (i, e) => {
        let newFormValues = [...education];
        newFormValues[i][e.target.name] = e.target.value;
        setEducation(newFormValues);
    };
    const addFormFields = () => {
        if (education.length < 5) {
            setEducation([...education, { university: "", degree: "" }]);
        } else {
            window.alert("You can add upto 5 fields only");
        }
    };
    const removeFormFields = (i) => {
        let newFormValues = [...education];
        newFormValues.splice(i, 1);
        setEducation(newFormValues);
    };

    return (
        <div className="section">
            <h2 className="title">Education Details</h2>
            <div className={classes["form-main"]}>
                {education.map((element, index) => (
                    <div className={classes["form-container"]} key={index}>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>University</div>
                            <input
                                required
                                type="text"
                                name="university"
                                value={element.university}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div className={classes["form-fields"]}>
                            <div className={classes["form-title"]}>Degree</div>
                            <select
                                required
                                name="degree"
                                value={element.degree}
                                onChange={(e) => handleChange(index, e)}
                            >
                                <option value="">--Select--</option>
                                <option value="btech">B.Tech</option>
                                <option value="mtech">M.Tech</option>
                                <option value="phd">PhD</option>
                            </select>
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

export default Education;
