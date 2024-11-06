import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './Header.css'


export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen);
    }
    return<>
         <nav className="second-part ">
                <ul className={`header-part ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" activeClassName="active" className="no-style" >Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active" className="no-style">About</NavLink></li>
                    <li><NavLink to="/our-initiate" activeClassName="active" className="no-style">Our Initiatives</NavLink></li>
                    <li><NavLink to="/our-partners" activeClassName="active" className="no-style">Our Partners</NavLink></li>
                    <li><NavLink to="/publications" activeClassName="active" className="no-style">Publications</NavLink></li>
                    <li><NavLink to="/our-books" activeClassName="active" className="no-style">Our Books</NavLink></li>
                    <li><NavLink to="/media-mention" activeClassName="active" className="no-style">Media Mention</NavLink></li>
                    <li><NavLink to="/our-blogs" activeClassName="active" className="no-style">Our Blogs</NavLink></li>
                    <li><NavLink to="/do-support" activeClassName="active" className="no-style">How can you support</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active" className="no-style">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
    </>
}