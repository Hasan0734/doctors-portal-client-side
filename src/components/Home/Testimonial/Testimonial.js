import React from 'react';

const Testimonial = ({testimonial}) => {

    return (
        <div className="col-md-4">
            <div className="card m-1 px-4 py-5">
                <p className="">{testimonial.quote}</p>
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <img className="w-75" src={testimonial.img} alt="" />
                    </div>
                    <div >
                        <h5 style={{ color: "#1CC7C1" }} className="card-title">{testimonial.name}</h5>
                        <small>{testimonial.from}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;