import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Education = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [education, setEducation] = useState([{ university: "", degree: "" }]);
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

    const handleSubmit = async () => {
        const res = await fetch(`/api/portfolio/${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ education }),
        });
        const data = await res.json();
        if (res.status === 200) {
            window.alert(data.msg);
        } else {
            window.alert("Error in saving");
        }
    };

    const getDetails = async () => {
        const res = await fetch(`/api/portfolio/${location}`);
        const data = await res.json();
        if (res.status === 200) {
            if (data.education.length) setEducation(data.education);
        } else {
            navigate("/");
        }
    };
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="template__container">
            <div className="template__field">
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
                        {education.length < 5 && (
                            <div className="template__add__button">
                                <button onClick={() => addFormFields()}>Add</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="template__links">
                <button onClick={handleSubmit}>Save</button>
                <Link to={`/portfolio/preview/${location}`}>Preview</Link>
            </div>
        </div>
    );
};

export default Education;
