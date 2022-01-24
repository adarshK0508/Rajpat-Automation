import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
export default function Blogs() {
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
            <h1 id="texty">Blogs</h1>
        </div>
        <h1>Not done yet :)</h1>
    <div id="last">
        <p>Privacy | Terms &amp; Conditions | Disclaimer <br/>
            Copyright © 2022 Rajpat Automation</p>
    </div>
  </>;
}
