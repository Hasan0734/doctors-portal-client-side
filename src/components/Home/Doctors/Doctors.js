import React from 'react';
import doctor from '../../../images/doctors.png'
import DoctorDetail from '../DoctorDetail/DoctorDetail';
const doctorsData =[
    {
        doctorImg: doctor,
        phone: '+880 17XXXXXXXX',
        name: 'Dr. Ema Whatson'
    },
    {
        doctorImg: doctor,
        phone: '+880 17XXXXXXXX',
        name: 'Dr. Ema Whatson'
    },
    {
        doctorImg: doctor,
        phone: '+880 17XXXXXXXX',
        name: 'Dr. Ema Whatson'
    },
]
const Doctors = () => {
    return (
        <section className="container pt-5 mb-5">
            <h5 style={{color: '#1CC7C1'}} className="mb-5 text-center">OUR DOCTORS</h5>
            <div className="row">
                {
                    doctorsData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
                }
            </div>
        </section>
    );
};

export default Doctors;