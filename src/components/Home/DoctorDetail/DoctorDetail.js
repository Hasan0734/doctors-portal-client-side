import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorDetail = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <div style={{height: '300px', overflow: 'hidden', marginBottom: '1rem'}}>
                <img className="img-fluid" src={doctor.doctorImg} alt="" />
                </div>
                <h5>{doctor.name}</h5>
               <FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faPhone}/> <small>{doctor.phone}</small>
            </div>
        </div>
    );
};

export default DoctorDetail;