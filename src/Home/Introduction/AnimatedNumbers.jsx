import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material';


export default function AnimatedNumbers({ target, timeTaken = 10, jump = 1 }) {

    const [number, setNumber] = useState(1);

    useEffect(() => {

        const interval = setInterval(() => {
            setNumber((prevNumber) => {
                if (prevNumber < target) {
                    return prevNumber + jump
                } else {
                    clearInterval(interval);
                    return target
                }
            })

        }, { timeTaken })

        return () => clearInterval(interval)

    }, [target])

    const formatNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    return <>
        <Typography variant="h2" color="brown" fontFamily={"revert"}>{formatNumber(Math.round(number))}</Typography>
    
    </>
}