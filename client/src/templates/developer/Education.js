import React from "react";
import "../Templates.css";
import { FaTrash } from "react-icons/fa";

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
        <div className="template__section">
            <h2>Education</h2>
            <div className="template__form__container">
                {education.map((element, index) => (
                    <div className="template__form" key={index}>
                        <div className="template__form__fields">
                            <div className="template__form__title">University</div>
                            <input
                                required
                                type="text"
                                name="university"
                                value={element.university}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div className="template__form__fields">
                            <div className="template__form__title">Degree</div>
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

export default Education;
