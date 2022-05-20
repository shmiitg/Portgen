import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const { userName } = useContext(UserContext);

    return (
        <div className="navbar__container">
            <div className="navbar">
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="nav-right">
                    {userName ? (
                        <Dropdown />
                    ) : (
                        <>
                            <div className="nav-link">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/register">Register</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
