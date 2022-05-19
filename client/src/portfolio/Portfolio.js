import React from "react";
import classes from "./Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const cards = [
        {
            type: "Developer",
            content: "Showcase your development skills and projects and get hired soon",
            link: "/portfolio/developer",
        },
        {
            type: "Research",
            content:
                "Showoff your research and stand a chance to become the best scientist in the world",
            link: "/portfolio/developer",
        },
        {
            type: "Designer",
            content: "Showcase your skills and projects",
            link: "/portfolio/developer",
        },
    ];
    return (
        <div className={classes["portfolio-container"]}>
            <h1>Choose your portfolio</h1>
            <div className={classes["container"]}>
                {cards.map((card, index) => (
                    <PortfolioCard
                        key={index}
                        index={index + 1}
                        type={card.type}
                        content={card.content}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
