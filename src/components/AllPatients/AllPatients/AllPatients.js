import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AllPatients.css'


const AllPatients = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch("https://calm-shelf-07611.herokuapp.com/appointment")
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-2  sidebar-container">
                <Sidebar></Sidebar>
            </div>
         
            <div style={{background: '#f4fdfb'}} className="col-md-10">
                <h3 className="ms-3 mt-4">Patients</h3>
                <div style={{width: '95%', padding: '40px', marginTop: '100px'}} className="card box-container ms-3">
                    <AppointmentDataTable appointments={appointments}/>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;