import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="card booking-card">
                <h4 className="text-color">{booking.subject}</h4>
                <h6>{booking.visitingHour}</h6>
                <small className="text-muted">{booking.totalSpace} SPACE AVAILABLE</small>
                <button onClick={openModal} style={{width: '50%', padding: '10px', margin: 'auto'}} className="btn mt-3 main-button">BOOK APPOINTMENT</button>
                <AppointmentForm date={date} modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;