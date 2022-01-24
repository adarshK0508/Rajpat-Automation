import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
    return <>
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
            <h1 id="texty">OUR MISSION</h1>
        </div>
        <div id="second">
            <h1>
            We are a team of experienced engineers having expertise in the field of automation, remote monitoring and control over IOT. Our projects include complete home automation, water saving through automation of pump controls, energy saving via monitoring of energy meters through smart phones.<br /><br />
            Artificial intelligence and machine learnings are the key theme of our projects. Changing the senerio of future using drone and robots is our mission .
        </h1></div>
        <div id="last">
            <p>Privacy | Terms &amp; Conditions | Disclaimer <br />
                Copyright © 2022 Rajpat Automation</p>
        </div>
    </>;
}
