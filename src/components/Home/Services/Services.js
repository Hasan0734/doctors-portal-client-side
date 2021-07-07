import React from 'react';
import Fluoride from '../../../images/Fluorid.png';
import Cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesData =[

    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teath Whitening',
        img: Whitening
    },
]

const Services = () => {
    return (
        <section className="container my-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-center">
           <div style={{width: '95%'}} className="row mt-5 pt-5" >
           {
                servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
           </div>
            </div>
        </section>
    );
};

export default Services;