import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
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
    };
    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <div className="dashboard__container">
            <div className="dashboard__portfolios">
                <div className="dashboard__box dashboard__heading">
                    <div className="dashboard__id">Id</div>
                    <div className="dashboard__type">Type</div>
                </div>
                {ids.map((id, index) => (
                    <div key={index} className="dashboard__box">
                        <div className="dashboard__id">{id}</div>
                        <div className="dashboard__type">{types[index]}</div>
                        <Link to={`/portfolio/developer/${id}`} className="dashboard__edit">
                            Edit
                        </Link>
                        <Link
                            to={`/portfolio/developer/preview/${id}`}
                            className="dashboard__preview"
                        >
                            Preview
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
