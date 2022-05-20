import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { FaModx, FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const { userName } = useContext(UserContext);

    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="logo">
                    <Link to="/">Portgen</Link>
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
    );
};

export default Navbar;
