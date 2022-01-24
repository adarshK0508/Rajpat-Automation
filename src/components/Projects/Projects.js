import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
export default function Projects() {
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
            <h1 id="texty">PROJECTS</h1>
        </div>
        <div id="second">
        <div id="firstOne">
            <h1>ELECTRONIC PROJECTS</h1>
            <p>Iot &amp; Robotics<br/>Obstacle Avoiding Car<br/>

                Arduino &amp; Raspberry Pi<br/>

                Light control using smartphone<br/>

                Water pump control using smart phone<br/>

                Convert Ordinary TV to Smart TV<br/>

                Artificial Intelligence / Machine Learning<br/>

                Android projects<br/>

                Mini Drone Projects<br/> </p><br/><br/>
            <h1>SOFTWARE PROJECTS</h1>
            <p>Android App Development<br/>

                Web Development<br/>

                Python Projects<br/>

                Student Management System<br/> </p>
        </div>
        <div id="secondOne">
            <h1>SMART HOME PROJECTS            </h1>
            <p>Home Automation <br/>

                Control Your Home Appliances From Anywhere In The World<br/>
                
                 Water pump control using smart phone <br/>
                
                 Remote energymeter monitoring<br/>
                
                 Theft monitoring<br/>
                
                 Human detecting Lighting System <br/>
                
                Convert Ordinary TV to Smart TV<br/>
                
                 
                
                Android projects<br/>
                
                Web Development<br/>
                
                 Interfacing domain &amp; hosting<br/>
                
                Iot &amp; Robotics<br/>
                
                Obstacle Avoiding Car<br/>
                
                Arduino &amp; Raspberry Pi<br/>
                
                Light control using smartphone<br/>
                
                Water pump control using smart phone<br/>
                
                Convert Ordinary TV to Smart TV<br/>
                
                Artificial Intelligence / Machine Learning<br/>
                
                Android projects<br/>
                
                Mini Drone Projects<br/></p>
        </div>
    </div>
    </>;
}
