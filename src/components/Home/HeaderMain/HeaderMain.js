import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Chair.png'
const HeaderMain = () => {
    return (
        <div className="container">
        <main style={{height: '600px'}} className="row d-flex align-items-center justify-content-between">
            <div className="col-md-4 offcet-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora asperiores odit, magni et nihil?</p>
                <Link to="/appointment"><button className="btn text-white px-3 main-button">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-7 ">
            <img className="img-fluid" src={chair} alt="" />
            </div>
            
        </main>
        </div>

    );
};

export default HeaderMain;