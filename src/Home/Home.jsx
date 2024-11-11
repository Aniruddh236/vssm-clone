import React from "react";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import Initiative from "./Initiative/Initiative";
import Blogs from './Blogs';
import Volunteer from "./Volunteer";
import Footer from "./Footer";

import './style/Home.css'

export default function Home() {


    return <>
        <div className="home-container">
            <Header />
            <Introduction />
            <Initiative />
            <Blogs />
            {/* 
            <div style={{ background: "lightgreen", padding: "10px" }}><Volunteer /></div>
            <div style={{ background: "lightcoral", padding: "10px" }}><Footer /></div>  */}
        </div>
    </>
}