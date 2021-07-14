import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctors.png'
import Doctor from '../Doctor/Doctor';
// const doctorsData =[
//     {
//         doctorImg: doctor,
//         phone: '+880 17XXXXXXXX',
//         name: 'Dr. Ema Whatson'
//     },
//     {
//         doctorImg: doctor,
//         phone: '+880 17XXXXXXXX',
//         name: 'Dr. Ema Whatson'
//     },
//     {
//         doctorImg: doctor,
//         phone: '+880 17XXXXXXXX',
//         name: 'Dr. Ema Whatson'
//     },
// ]
const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("https://calm-shelf-07611.herokuapp.com/doctors")
        .then(res => res.json()) 
        .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
    return (
        <section className="container pt-5 mb-5">
            <h5 style={{color: '#1CC7C1'}} className="mb-5 text-center">OUR DOCTORS</h5>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </section>
    );
};

export default Doctors;