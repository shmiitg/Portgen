import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaModx, FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.css";

const Navbar = ({ name }) => {
    const { userName, setUserName } = useContext(UserContext);

    const logout = async () => {
        const res = await fetch("/api/logout");
        const data = await res.json();
        if (res.status === 200) {
            setUserName(null);
        } else {
            window.alert(data.error);
        }
    };

    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="logo">
                    <Link to="/">Portgen</Link>
                </div>
            </div>
            <div className="nav-right">
                {userName ? (
                    <div className="dropdown">
                        <div className="user-name">
                            <FaUserCircle />
                        </div>
                        <div className="dropdown-wrapper">
                            <div className="dropdown-items">
                                <div className="dropdown-item">
                                    <Link to="/dashboard">
                                        <FaModx />
                                        {name}
                                    </Link>
                                </div>
                                <div className="dropdown-item" onClick={logout}>
                                    <BiLogOut />
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
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
