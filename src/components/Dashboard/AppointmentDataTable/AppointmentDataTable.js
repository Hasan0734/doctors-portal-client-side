import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <div className="table-responsive">
            <h4 className="text-color mb-5">All Patients</h4>
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th   className="text-secondary" scope="col">Sr.No  </th>
                        <th   className="text-secondary" scope="col">Name  </th>
                        <th   className="text-secondary" scope="col">Gender  </th>
                        <th   className="text-secondary" scope="col">Age  </th>
                        <th   className="text-secondary" scope="col">Weight  </th>
                        <th   className="text-secondary" scope="col">Phone  </th>
                        <th   className="text-secondary" scope="col">Email  </th>
                    </tr>
                </thead>
                <tbody>
                   {
                   appointments.map((appointment, index)=> 

                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.weight}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentDataTable;