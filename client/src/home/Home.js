import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import hero from "../images/hero.svg";
import "./Home.css";

const Home = () => {
    const { userName } = useContext(UserContext);

    const navigate = useNavigate();
    const generateRandom = async () => {
        const res = await fetch(`/api/user/portfolio`);
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            navigate(`/portfolio/${data.random}`);
        } else {
            window.alert(data.error);
        }
    };

    return (
        <div className="home-container">
            <div className="home-left">
                <div className="text-area">
                    <h2>Build your portfolio with Portgen</h2>
                    <p>
                        Showcase your work and accomplishments in coding, design, architecture,
                        photography and more in your portfolio with Portgen. Stand out with the
                        click of a button.
                    </p>
                    {userName ? (
                        <button onClick={generateRandom} className="text-btn">
                            Get Started
                        </button>
                    ) : (
                        <Link className="text-btn" to="/login">
                            Login to continue
                        </Link>
                    )}
                </div>
            </div>
            <div className="home-right">
                <img src={hero} alt="banner" />
            </div>
        </div>
    );
};

export default Home;
