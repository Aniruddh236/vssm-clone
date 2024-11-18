import React from "react";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import Initiative from "./Initiative/Initiative";
import Volunteer from "./Volunteer/Volunteer";
import Footer from "./Footer/Footer";

import './style/Home.css'
import Blogs from "./Blogs/Blogs";


export default function Home() {


    return <>
        <div className="home-container">
            <Header />
            <Introduction />
            <Initiative />
            <Blogs />
            <Volunteer />
            <Footer />
        </div>
    </>
}