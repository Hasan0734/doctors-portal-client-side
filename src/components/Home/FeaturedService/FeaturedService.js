import React from 'react';
import treatment from '../../../images/treatment.png'
const FeaturedService = () => {
    return (
        <section style={{marginBottom: '12rem'}} className="features-service mt-5 pt-5">
            <div className="container mb-5">
            <div style={{width: '85%'}} className="row mb-5">
                <div className="col-md-5 mb-4">
                    <img className="img-fluid" src={treatment} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <div>
                        <h1 className="mb-5">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="text-secondary w-75">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <br />
                        <button style={{background: 'linear-gradient(90deg, #18D3B8, #4EDCEC)'}} className="btn text-white px-3 py-2">Learn More</button>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default FeaturedService;