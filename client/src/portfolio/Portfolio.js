import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Portfolio.module.css";
import personal from "../images/personal.svg";
import education from "../images/education.svg";
import project from "../images/project.svg";
import experience from "../images/experience.svg";

const Portfolio = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[2];

    const checkId = async () => {
        const res = await fetch(`/api/portfolio/${location}`);
        if (res.status !== 200) {
            navigate("/");
        }
    };

    useEffect(() => {
        checkId();
    }, []);

    return (
        <div className={classes["portfolio-container"]}>
            <h1>Fill these details</h1>
            <div className={classes["container"]}>
                <div className={classes["details"]}>
                    <Link to={`/portfolio/personal/${location}`}>
                        <img src={personal} alt="personal" />
                        <h3>Personal</h3>
                    </Link>
                </div>
                <div className={classes["details"]}>
                    <Link to={`/portfolio/education/${location}`}>
                        <img src={education} alt="education" />
                        <h3>Education</h3>
                    </Link>
                </div>
                <div className={classes["details"]}>
                    <Link to={`/portfolio/project/${location}`}>
                        <img src={project} alt="project" />
                        <h3>Projects</h3>
                    </Link>
                </div>
                <div className={classes["details"]}>
                    <Link to={`/portfolio/experience/${location}`}>
                        <img src={experience} alt="work" />
                        <h3>Work Experience</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
