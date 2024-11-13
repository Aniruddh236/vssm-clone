import React from "react";
import { Button, Typography } from "@mui/material";

import './Volunteer.css'


export default function Volunteer() {


    return <>
        <div className="volunteer-container">
            <header>
                <p>GET INVOLVED</p>
                <Typography variant="h1" fontFamily="revert">Volunteer with vssm</Typography>
            </header>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'brown', color: '#fff', fontSize: 'large' }}>Sign up!</Button>
        </div>
    </>
}