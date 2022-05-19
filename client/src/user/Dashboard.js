import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [ids, setIds] = useState([]);
    const [types, setTypes] = useState([]);
    const fetchUserInfo = async () => {
        const res = await fetch("/api/user/info");
        const data = await res.json();
        if (res.status === 200) {
            setIds(data.ids);
            setTypes(data.types);
        } else {
            window.alert(data.error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchUserInfo();
    }, []);

    if (loading) return <></>;
    return (
        <div className={classes["dashboard-container"]}>
            <div className={classes["portfolios"]}>
                {ids.map((id, index) => (
                    <div key={index} className={classes["portfolio-box"]}>
                        <div className="portfolio-id">{id}</div>
                        <div className="portfolio-type">{types[index]}</div>
                        <Link to={`/portfolio/developer/${id}`} className="portfolio-id">
                            Edit
                        </Link>
                        <Link to={`/portfolio/developer/preview/${id}`}>Preview</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
