import React, { useState, useEffect } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import { Link, useLocation } from "react-router-dom";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import "./Portfolio.css";

const Portfolio = () => {
    let location = useLocation();
    location = location.pathname.split("/")[4];
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [project, setProject] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`/api/portfolio/developer/preview/${location}`);
        const data = await res.json();
        if (res.status === 200) {
            if (data.education) setEducation(data.education);
            if (data.experience) setExperience(data.experience);
            if (data.project) setProject(data.project);
        } else {
            window.alert(data.error);
        }
    };
    const exportPdf = () => {
        // html2canvas(document.querySelector("#portfolio")).then((canvas) => {
        // const imgData = canvas.toDataURL("image/png");
        // const pdf = new jsPDF(canvas);
        // pdf.addImage(imgData, "PNG", 0, 0);
        // pdf.save("download.pdf");
        // });
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
        <div className="preview-container">
            <div id="portfolio" className="portfolio">
                <Education education={education} />
                <Experience experience={experience} />
                <Project project={project} />
            </div>
            <div className="btn-container">
                <Link to={`/portfolio/developer/${location}`}>Edit Details</Link>
            </div>
            <div className="btn-download" onClick={exportPdf}>
                Download
            </div>
        </div>
    );
};

export default Portfolio;
