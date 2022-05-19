import React, { useState, useEffect } from "react";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Templates.css";

const Developer = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [education, setEducation] = useState([{ university: "", degree: "" }]);
    const [project, setProject] = useState([{ title: "", link: "" }]);
    const [experience, setExperience] = useState([{ company: "", description: "" }]);

    const handleSubmit = async () => {
        const res = await fetch(`/api/portfolio/developer/${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ education, project, experience }),
        });
        const data = await res.json();
        if (res.status === 200) {
            window.alert(data.msg);
        } else {
            window.alert("Error in saving");
        }
    };

    const getDetails = async () => {
        const res = await fetch(`/api/portfolio/developer/${location}`);
        const data = await res.json();
        if (res.status === 200) {
            if (data.education) setEducation(data.education);
            if (data.project) setProject(data.project);
            if (data.experience) setExperience(data.experience);
        } else {
            navigate("/");
        }
    };
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="track-container">
            <div className="track">
                <div className="field">
                    <Education education={education} setEducation={setEducation} />
                </div>
                <div className="field">
                    <Project project={project} setProject={setProject} />
                </div>
                <div className="field">
                    <Experience experience={experience} setExperience={setExperience} />
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <Link to={`/portfolio/developer/preview/${location}`}>Preview</Link>
        </div>
    );
};

export default Developer;
