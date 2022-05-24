import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Project = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [project, setProject] = useState([{ title: "", link: "" }]);
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

    const handleSubmit = async () => {
        const res = await fetch(`/api/portfolio/${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ project }),
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
            if (data.project.length) setProject(data.project);
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
                    {project.length < 5 && (
                        <div className="template__add__button">
                            <button onClick={() => addFormFields()}>Add</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="template__links">
                <button onClick={handleSubmit}>Save</button>
                <Link to={`/portfolio/preview/${location}`}>Preview</Link>
            </div>
        </div>
    );
};

export default Project;
