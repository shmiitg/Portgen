import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import classes from "./Portfolio.module.css";

const PortfolioCard = ({ index, type, content, link }) => {
    const navigate = useNavigate();
    const generateRandom = async () => {
        let portfolioType = type.toLowerCase();
        const res = await fetch(`/api/user/portfolio/${portfolioType}`);
        const data = await res.json();
        if (res.status === 200) {
            navigate(`/portfolio/${portfolioType}/${data.random}`);
        } else {
            window.alert(data.error);
        }
    };
    return (
        <div className={classes["card"]}>
            <div className={classes["box"]}>
                <div className={classes["content"]}>
                    <h2>0{index}</h2>
                    <h3>{type}</h3>
                    <p>{content}</p>
                    <div className={classes["btn"]} onClick={generateRandom}>
                        Start <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
