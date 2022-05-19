import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../images/hero.svg'
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-left">
                <div className="text-area">
                    <h2>Build your portfolio with Portgen</h2>
                    <p>Showcase your work and accomplishments in coding, design, architecture, photography and more in your portfolio with Portgen.
                        Stand out with the click of a button.</p>
                    <Link to="/portfolio" className="text-btn">Get Started</Link>
                </div>
            </div>
            <div className="home-right">
                <img src={hero} alt="" />
            </div>
        </div>
    )
}

export default Home
