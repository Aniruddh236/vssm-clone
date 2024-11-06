import React from "react";
import './Header.css'
import { Link } from "react-router-dom";


export default function Logo(){
    
    const imgSrc = "https://vssm.erpodoo.co.in/web/image/12139-306304d7/logo.png"


    return<>
         <div className="first-part">
                <div className="logo-part">
                    <Link to="/"><img src={imgSrc} alt="VSSM-logo" /></Link>
                    <div className="logo-and-name">
                        <h2>Vicharta Samuday Samarthan Manch</h2>
                        <h4 className="gujarati-font">વિચરતા સમુદાય સમર્થન મંચ</h4>
                    </div>
                </div>
                <div className="social-media-icons">
                </div>
            </div>
    </>
}