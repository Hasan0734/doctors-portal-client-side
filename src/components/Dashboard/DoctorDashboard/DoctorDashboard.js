import React, { useEffect, useState } from 'react';
import DoctorTableData from '../DoctorTableData/DoctorTableData';
import Sidebar from '../Sidebar/Sidebar';
import './DoctorDashboard.css'

const data = [
    {
        total: '09',
        action: 'Pending',
        name: 'Appointment',
        background: 1
    },
    {
        total: '09',
        action: "Today's",
        name: 'Appointment',
        background: 2
    },
    {
        total: '09',
        action: 'Total',
        name: 'Appointment',
        background: 3
    },
    {
        total: '09',
        action: 'Total',
        name: 'Patients',
        background: 4
    }
]

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch("https://calm-shelf-07611.herokuapp.com/appointment")
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-2 sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: '#f4fdfb'}}  className="col-md-10">
                <h3 className="mt-5 ms-3">Dashboard</h3>
                <div style={{width: '96%', marginTop: '3rem'}} className="row ms-2">
                    {
                        data.map(dt => 
                            <div className="col-md-3">
                                <div className={`d-flex card-box box-${dt.background}`}>
                                        <h1>{dt.total}</h1>
                                    <div className="ms-3">
                                        <span>{dt.action}</span>
                                        <p>{dt.name}</p>
                                    </div>
                                </div>
                            </div> )
                    }
                </div>
            <div style={{width: '95%', padding: '40px', marginTop: '50px'}} className="card box-container ms-3">
                    <DoctorTableData appointment={appointments}></DoctorTableData>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;