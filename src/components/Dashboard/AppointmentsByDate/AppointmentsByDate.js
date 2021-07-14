import React, { useState, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import './AppointmentsByDate.css'

const AppointmentsByDate = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [appointments, setAppointments] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
useEffect(() => {
    fetch("https://calm-shelf-07611.herokuapp.com/appointmentsByDate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({date: selectedDate, email: loggedInUser.email}),
      })
        .then((res) => res.json())
        .then((data) => setAppointments(data))
       
},[selectedDate])
    
    return (
        <div style={{width: '90%'}} className="row ms-3">
            <h4 className="mt-5">Appointment</h4>
            <div className="col-md-6 mt-5">
                <div className="card simple-card">
                <Calendar className="calendar-main"
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
            </div>
            <div className="col-md-6 mt-5">
               <div className="card p-4 simple-card calendar-main">
                   <div className="d-flex justify-content-between">
                   <h4 className="text-color">Appointments: {appointments.length}</h4>
                   <h5 className="text-secondary">{selectedDate.toDateString()}</h5>
                   </div>
                    <div className="table-responsive mt-5">
                        {appointments.length ? <table style={{fontSize: '20px', fontWeight: '500'}} className="table table-borderless">
                            <thead className="text-muted">
                                <tr>
                                    <td>Name</td>
                                    <td className="text-center">Schedule</td>
                                    <td className="text-center">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                     <tr>
                                 
                                    <td>{index + 1}. {appointment.name}</td>
                                    <td className="text-center">{appointment.time}</td>
                                    <td className="text-center">
                                        <select className="btn main-button">
                                            <option value="Visited">Visited</option>
                                            <option value="Not Visited">Not Visited</option>
                                        </select>
                                    </td>
                                </tr>
                                ))}
                               
                            </tbody>
                        </table> :
                        <p className="text-center text-muted">No Available appointments</p>}
                        
                    </div>
               </div>
            </div>
        </div>
    );
};

export default AppointmentsByDate;