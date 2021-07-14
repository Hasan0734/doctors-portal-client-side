import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorTableData = ({appointment}) => {
    return (
        <div className="table-responsive">
            <table className="table table-borderless text-center">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Sr.No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Time</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary" scope="col">Prescription</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointment.map((data, index) =>  
                        <tr>
                            <td>{index + 1}</td>
                            <td>{new Date(data.date).toLocaleDateString()}</td>
                            <td>{data.time}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td><button className="btn main-button px-4">View</button></td>
                            <td><button className="btn main-button ">Pending</button> 
                            <button style={{background: '#ffd076'}} className="btn text-white ms-2"><FontAwesomeIcon icon={faPen}/></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DoctorTableData;