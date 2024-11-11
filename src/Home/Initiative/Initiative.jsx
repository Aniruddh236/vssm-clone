import { Typography } from "@mui/material";
import React from "react";

import './Initiative.css'
import Providing from "./Providing";
export default function Initiative() {


    return <>
        <div>
            <div className="initiative-content">
                <div className="left-part">
                    <div>
                        <Typography variant="h3" fontFamily={"revert"}>OUR VISION</Typography>
                        <h1>The Nomadic and De-notified tribes attain identity and live a dignified life.</h1>
                    </div>
                    <div>
                        <Typography variant="h3" fontFamily={"revert"} >OUR MISSION</Typography>
                        <h1>VSSM strives to create an empathetic social and political environment that is willing to enable inclusive growth of the Nomadic and de-notified communities.</h1>
                    </div>
                </div>
                <div className="right-part">
                    <header>
                        <Typography variant="h3" fontFamily={"revert"}>Our Initiatives</Typography>
                    </header>
                    <div className="providing">
                        <Providing />
                    </div>
                </div>
            </div>
        </div>
    </>
}