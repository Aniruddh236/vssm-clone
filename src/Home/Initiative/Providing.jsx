import React, { useEffect } from "react";

import './Providing.css'

export default function Providing() {


    useEffect(() => {
        console.log("Providing mounted");

    }, [])
    const data = [
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Rights_75x67px-01.png',
            header: 'Rights & Entitlements',
            description: 'Enable the communities of NT and DNTs avail their fundamental rights and entitlements.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Employment_75x67px-01-01-01-01-01.png',
            header: 'Employment',
            description: 'Facilitate creation of alternate employment opportunities in lieu of the traditional occupations that have been rendered obsolete with time.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Education_75x67px-01-01-01-01.png',
            header: 'Education',
            description: 'Ensure all the children from NT and DNTs enjoy their fundamental Right to Education.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Housing_75x67px-01.png',
            header: 'Housing',
            description: 'Ensure that the Nomadic and De-Notified Tribes acquire a roof, a place to settle and get an address of their own'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Rehabilitation_75x67px-01-01-01.png',
            header: 'Rehabilitating Vadia',
            description: 'The persistent efforts by VSSM has brought an unprecedented change in the lives of people here in Vadia Village.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Water_Management_75x67px-01-01.png',
            header: 'Participatory Water Management',
            description: 'The Participatory Water Management initiative was introduced with a hope to recharge and revive the ground water levels in the region.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Housing_75x67px-01-01-01.png',
            header: 'Disaster Relief and Rehabilitation',
            description: 'Facilitate creation of alternate employment opportunities in lieu of the traditional occupations that have been rendered obsolete with time.'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2019/03/Icon_Health_75x67px-01-01-01.png',
            header: 'Elderly Assistance - Mavjat',
            description: 'Ensure that elderly individuals of Nomadic and De-Notified communities have access to wholesome food, quality healthcare during medical emergencies'
        },
        {
            logo: 'https://www.vssmindia.org/wp-content/uploads/2023/02/Icon_VVV_75x67px-01-01-150x150.png',
            header: 'Vallabh Vidya Vihar',
            description: 'VSSM has visualized a one-of-a-kind cultural and educational enclave for nomadic and de- notified communities. A place they can call their own, a place for their children to acquire skill-based learning and basic education.'
        },
        
    ]



    return <>{
        data.map((item, index) => {
            return <div className="providing-container" key={index}>
                <img src={item.logo}></img>
                <div className="card-detail">
                    <a href="#" style={{textDecoration:'none', color:'brown'}}><h3>{item.header}</h3></a>
                    <p>{item.description}</p>
                </div>
            </div>
        })
    }
    </>
}