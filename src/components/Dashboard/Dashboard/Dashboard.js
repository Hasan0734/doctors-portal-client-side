import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2 sidebar-container">
                    <Sidebar></Sidebar>
                </div>
                <div style={{background: '#f4fdfb'}} className="col-md-10">
               <AppointmentsByDate></AppointmentsByDate>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;