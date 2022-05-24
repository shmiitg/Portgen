import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import "./Portfolio.css";

const Portfolio = () => {
    const navigate = useNavigate();
    let location = useLocation();
    location = location.pathname.split("/")[3];
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [project, setProject] = useState([]);
    const [personal, setPersonal] = useState({ name: "", email: "", github: "", linkedin: "" });
    const titleStyle = { fontWeight: "bold", fontSize: "18px" };

    const fetchData = async () => {
        const res = await fetch(`/api/portfolio/${location}`);
        const data = await res.json();
        if (res.status === 200) {
            if (data.personal) setPersonal(data.personal);
            if (data.education) setEducation(data.education);
            if (data.experience) setExperience(data.experience);
            if (data.project) setProject(data.project);
        } else {
            navigate("/");
        }
    };
    const exportPdf = () => {
        const pdfTable = document.querySelector("#portfolio");
        const html = htmlToPdfmake(pdfTable.innerHTML);
        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="preview__container">
            <div style={{ padding: "20px", background: "#fff" }}>
                <div id="portfolio">
                    <div>
                        <Personal personal={personal} titleStyle={titleStyle} />
                    </div>
                    <br />
                    <div>
                        <Education education={education} titleStyle={titleStyle} />
                    </div>
                    <br />
                    <div>
                        <Experience experience={experience} titleStyle={titleStyle} />
                    </div>
                    <br />
                    <div>
                        <Project project={project} titleStyle={titleStyle} />
                    </div>
                </div>
            </div>
            <div className="template__links">
                <Link to={`/portfolio/${location}`}>Edit Details</Link>
                <button className="btn-download" onClick={exportPdf}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
