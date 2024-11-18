import React from "react";
import { NavLink } from "react-router-dom";

import "./InfoWork.css"

export default function InfoWork() {

    return <div className="infowork-container">
        <div className="info">
            <header><h2>Info</h2></header>
            <li><NavLink to="/" activeClassName="active" className="no-style" >Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className="no-style">About us</NavLink></li>
            <li><NavLink to="/our-partners" activeClassName="active" className="no-style">Our Partners</NavLink></li>
            <li><NavLink to="/media-mention" activeClassName="active" className="no-style">Media Mention</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className="no-style">Contact</NavLink></li>
            <li><NavLink to="/publications" activeClassName="active" className="no-style">Publications</NavLink></li>
            <li><NavLink to="/our-blogs" activeClassName="active" className="no-style">Privacy Policy</NavLink></li>
            <li><NavLink to="/do-support" activeClassName="active" className="no-style">FCRA Details</NavLink></li>
            <li><NavLink to="/our-books" activeClassName="active" className="no-style">Our Books</NavLink></li>
        </div>
        <div className="work">
            <header><h2>Our Work</h2></header>
            <li><NavLink to="/media-mention" activeClassName="active" className="no-style">Rights & Entitlements</NavLink></li>
            <li><NavLink to="/our-blogs" activeClassName="active" className="no-style">Education</NavLink></li>
            <li><NavLink to="/do-support" activeClassName="active" className="no-style">Rehabilitating Vadia</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className="no-style">Disaster Relief and Rehabilitation</NavLink></li>
        </div>
    </div>
}


