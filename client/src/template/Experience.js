import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Experience = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [experience, setExperience] = useState([{ company: "", description: "" }]);
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

    const handleSubmit = async () => {
        const res = await fetch(`/api/portfolio/${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ experience }),
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
            if (data.experience.length) setExperience(data.experience);
        } else {
            navigate("/");
        }
    };
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="template__container">
            <div className="template__section">
                <h2>Work and Experience</h2>
                <div className="template__form__container">
                    {experience.map((element, index) => (
                        <div className="template__form" key={index}>
                            <div className="template__form__fields">
                                <div className="template__form__title">Company</div>
                                <input
                                    required
                                    type="text"
                                    name="company"
                                    value={element.company}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="template__form__fields">
                                <div className="template__form__title">Work Details</div>
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
            <div className="template__links">
                <button onClick={handleSubmit}>Save</button>
                <Link to={`/portfolio/preview/${location}`}>Preview</Link>
            </div>
        </div>
    );
};

export default Experience;
