import React from 'react';

const PrescriptionsTable = ({prescription}) => {
    return (
        <div className="table-responsive">
            <h4 className="text-color mb-5">All Patients</h4>
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th   className="text-secondary" scope="col">Sr.No  </th>
                        <th   className="text-secondary" scope="col">Date  </th>
                        <th   className="text-secondary" scope="col">Name  </th>
                        <th   className="text-secondary" scope="col">Phone  </th>
                        <th   className="text-secondary" scope="col">Prescription </th>
                    </tr>
                </thead>
                <tbody>
                   {
                   prescription.map((prescription, index)=> 

                        <tr>
                            <td>{index + 1}</td>
                            <td>{new Date(prescription.date).toLocaleDateString()}</td>
                            <td>{prescription.name}</td>
                            <td>{prescription.phone}</td>
                            <td><button className="btn main-button">View</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PrescriptionsTable;