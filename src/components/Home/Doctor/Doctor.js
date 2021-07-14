import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <div style={{height: '300px', overflow: 'hidden', marginBottom: '1rem'}}>
                { doctor.image? <img className="img-fluid" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
                   : <img className="img-fluid" src={`https://calm-shelf-07611.herokuapp.com/${doctor.img}`} alt="" />
                }
                </div>
                <h5>{doctor.name}</h5>
               <FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faEnvelope}/> <small>{doctor.email}</small>
            </div>
        </div>
    );
};

export default Doctor;