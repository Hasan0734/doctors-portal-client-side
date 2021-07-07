import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
    const infosData = [

        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn, NY 10063, United States',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title: 'Contact us now',
            description: '+880 17XXXXXXXX',
            icon: faPhone,
            background: 'primary'
        }
    ]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="d-flex justify-center">
           <div style={{width: '95%'}} className=" row">
           {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
           </div>
            </div>
        </section>
    );
};

export default BusinessInfo;