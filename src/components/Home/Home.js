import React from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div id="first">
            <div id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>
                <h1 id="texty">AUTOMATION<br/>AND<br/>REMOTE MONITORING</h1>
                <h1 id="tagline">We make life easier . . .</h1>
        </div>
        <div id='second'>
            <p>“We are in a brave new world where not only do our children talk back to us, but so do our appliances.”
            </p>
        </div>
        <div id="third">
            <h1>FUTURE EVENTS
            </h1>
        </div>
        <div id="last">
            <p>Privacy | Terms 	&amp; Conditions | Disclaimer <br/>
                Copyright © 2022 Rajpat Automation</p>
        </div>
        </>
    )

}