import React from "react";
import notFound from "../images/404.svg";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="error__container">
            <div className="error__img">
                <img src={notFound} alt="404" />
            </div>
            <Link className="text-btn" to="/">
                Go to home page
            </Link>
        </div>
    );
};

export default Error;
