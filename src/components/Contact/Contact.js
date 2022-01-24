import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

export default function Contact() {
    return <><div id="first">
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
        <h1 id="texty">Contact Us</h1>
    </div>
    <div id="second">
        <h1>WE'RE READY, LET'S TALK.</h1>
        <h1>CONTACT INFO </h1>
        <p>Email Us <br/>
            rajpatautomation@gmail.com<br/>
            hkspatna@gmail.com<br/>
            hkspatna@yahoo.com<br/>
            hksingh1972@yahoo.com<br/>
            
           Call Us<br/>
            +91 9953861160<br/>
            +91 6200362921 <br/>       </p>
    </div>
    <div id="last">
        <p>Privacy | Terms &amp; Conditions | Disclaimer <br/>
            Copyright © 2022 Rajpat Automation</p>
    </div>
    </>;
}
