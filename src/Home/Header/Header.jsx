import React from "react";
import { Outlet } from 'react-router-dom';


import './Header.css'
import Navigation from "./Navigation";
import Logo from "./Logo";



export default function Header() {


    return <>
        <header className="headerContainer">
           <Logo />
           <Navigation />
           <Outlet />
        </header>
    </>
}