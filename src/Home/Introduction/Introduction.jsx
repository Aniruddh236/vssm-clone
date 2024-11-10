import React from "react";
import Carousel from 'react-material-ui-carousel'

import './Introduction.css'
import AnimatedNumbers from "./AnimatedNumbers";
import YoutubeVideos from "./YoutubeVideos";

export default function Introduction() {

    const imgSrc = [
        "https://images.unsplash.com/photo-1640456515508-191d699eb286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1640456516695-7c017212c3e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1679088034974-2c9c01d59992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zdGVsfGVufDB8fDB8fHww",
    ]



    return <>
        <div className="introContainer">
            <div className="carousel-container">
                <Carousel
                    className="carousel-item"
                    interval={3000}>
                    {
                        imgSrc.map((link, index) => (
                            <img src={link} alt={`Image ${index}`} ></img>
                        ))
                    }
                </Carousel>
            </div>
            <div className="description">
                <p>Vicharta Samuday Samarthan Manch is a non-profit organisation working to empower the nomadic and de-notified communities while striving to create an inclusive society as well as government policies for these extremely marginalised sections of our society.
                    VSSM as a collective was initiated in the year 2006 and was formally registered as an organization in the year 2010, with the mission to give social identity, citizen’s rights, education, health facilities, housing and livelihood options to the various communities of Nomadic and De-Notified Tribes (NT-DNTs) .</p>
            </div>
            <div className="numbers-container">
                <div className="animated-number-individual">
                    <AnimatedNumbers target={3000} timeTaken={0.5} jump={11} />
                    <span>
                        <p>Number of settlements reached</p>
                    </span>
                </div>
                <div className="animated-number-individual">
                    <AnimatedNumbers target={200000} timeTaken={0.1} jump={1021} />
                    <span>
                        <p>Number of families reached</p>
                    </span>
                </div>
                <div className="animated-number-individual">
                    <AnimatedNumbers target={500000} timeTaken={0.09} jump={1021} />
                    <span>
                        <p>Number of individuals reached</p>
                    </span>
                </div>
                <div className="animated-number-individual">
                    <AnimatedNumbers target={350} timeTaken={100} jump={1} />
                    <span>
                        <p>Number of children with VSSM hostels</p>
                    </span>
                </div>
            </div>
            <div className="youtube-content">
                    <YoutubeVideos />
            </div>
        </div>
    </>
}