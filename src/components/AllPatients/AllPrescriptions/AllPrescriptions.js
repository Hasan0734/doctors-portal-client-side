import React, { useEffect, useState } from 'react';
import PrescriptionsTable from '../../Dashboard/PrescriptionsTable/PrescriptionsTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPrescriptions = () => {

    const [prescriptions, setPrescriptions] = useState([])
    useEffect(() => {
        fetch("https://calm-shelf-07611.herokuapp.com/appointment")
        .then(res => res.json())
        .then(data => setPrescriptions(data))
    }, [])
    return (
        <div className="container-fluid row">
        <div className="col-md-2  sidebar-container">
            <Sidebar></Sidebar>
        </div>
     
        <div style={{background: '#f4fdfb'}} className="col-md-10">
            <h3 className="ms-3 mt-4">Prescriptions</h3>
            <div style={{width: '95%', padding: '40px', marginTop: '100px'}} className="card box-container ms-3">
               <PrescriptionsTable prescription = {prescriptions}></PrescriptionsTable>
            </div>
        </div>
    </div>
    );
};

export default AllPrescriptions;