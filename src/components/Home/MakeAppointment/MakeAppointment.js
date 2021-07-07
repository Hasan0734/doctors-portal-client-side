import React from 'react';
import doctors from '../../../images/doctors.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment my-5">
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid doctors-img" src={doctors} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 style={{color: '#1CC7C1'}}>APPOINTMENT</h5>
                    <h1 className="mb-5">Make an appointment <br /> Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae numquam dicta exercitationem eligendi corporis fuga natus minus! Aut, recusandae?</p>
                   <br />
                    <button style={{background: 'linear-gradient(90deg, #18D3B8, #4EDCEC)'}} className="btn text-white px-3 py-2 mt-5">Learn More</button>

                </div>
            </div>
            </div>
        </section>
    );
};

export default MakeAppointment;