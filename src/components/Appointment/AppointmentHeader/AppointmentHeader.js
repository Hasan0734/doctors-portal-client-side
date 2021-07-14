import React from 'react';
import chair from '../../../images/Chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <div className="container">
        <main style={{height: '600px'}} className="row d-flex align-items-center justify-content-between">
            <div className="col-md-4 offcet-md-1">
                <h1 style={{color: '#3A4256'}}>Appointment</h1>
                <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
            </div>
            <div className="col-md-7 ">
            <img className="img-fluid" src={chair} alt="" />
            </div>
            
        </main>
        </div>
    );
};

export default AppointmentHeader;