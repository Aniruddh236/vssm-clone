import React from "react";

import './Footer.css'
import { Button } from "@mui/material";
import SubscribeForm from "./SubscribeForm";
import InfoWork from "./InfoWork"
import Copyright from "./Copyright";

export default function Footer() {

    const imgSrc = "https://www.vssmindia.org/web/image/122629-49da6154/VSSMlogot.webp"
    return <>
        <div className="footer-container">
            <div className="upper">
                <div className="footer-logo">
                    <img src={imgSrc}></img>
                </div>
                <div className="footer-address">
                    <h2>Aaryan Corporate Park</h2>

                    <p>Block No. : 9, 2nd Floor, Thaltej – Shilaj Road, Near Shilaj Railway Crossing, Thaltej,

                        Ahmedabad – 380058, Gujarat. India. |  9099936013 | 9099936019  vssmgujarat@gmail.com</p>
                </div>
                <div className="footer-donante">
                    <Button sx={{ backgroundColor: 'brown', color: 'white', '&:hover': { backgroundColor: 'red' } }}>If you would like to donate</Button>
                </div>
            </div>

            <div className="lower">
                <div className="footer-subscribe"><SubscribeForm /></div>
                <div className="footer-info-work"><InfoWork /></div>

            </div>
            <div className="copyright">
                <Copyright />
            </div>
            <div>
            </div>

        </div>
    </>
}