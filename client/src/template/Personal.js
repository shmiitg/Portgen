import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Personal = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [personal, setPersonal] = useState({ name: "", email: "", github: "", linkedin: "" });
    const handleInput = (e) => setPersonal({ ...personal, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        const res = await fetch(`/api/portfolio/${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ personal }),
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
        console.log(data);
        if (res.status === 200) {
            if (data.personal) setPersonal(data.personal);
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
                <h2>Personal Details</h2>
                <div className="template__form__container">
                    <div className="template__form">
                        <div className="template__form__fields">
                            <div className="template__form__title">Name</div>
                            <input
                                required
                                type="text"
                                name="name"
                                value={personal.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="template__form__fields">
                            <div className="template__form__title">Email</div>
                            <input
                                required
                                type="text"
                                name="email"
                                value={personal.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="template__form__fields">
                            <div className="template__form__title">Github Profile</div>
                            <input
                                required
                                type="text"
                                name="github"
                                value={personal.github}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="template__form__fields">
                            <div className="template__form__title">LinkedIn Profile</div>
                            <input
                                required
                                type="text"
                                name="linkedin"
                                value={personal.linkedin}
                                onChange={handleInput}
                            />
                        </div>
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

export default Personal;
