import React from "react";
import quote from "../../../images/quote.png";
import winson from "../../../images/winson.png"
import ema from "../../../images/ema.png"
import mery from "../../../images/Mery.png"
import Testimonial from "../Testimonial/Testimonial";

const testimonialData = [

    {
        quote: 'It is a long established fact that by the readable content fo a lot layour. The point of using Lorem a more-or-less normal distribu to using Content hera, content',
        name: 'Winson Hery',
        img: winson,
        from: 'California'
    },

    {
        quote: 'It is a long established fact that by the readable content fo a lot layour. The point of using Lorem a more-or-less normal distribu to using Content hera, content',
        name: 'Ema Whatson',
        img: ema,
        from: 'California'
    },

    {
        quote: 'It is a long established fact that by the readable content fo a lot layour. The point of using Lorem a more-or-less normal distribu to using Content hera, content',
        name: 'Mery Charly',
        img: mery,
        from: 'California'
    },
]

const Testimonials = () => {
 
  return (
    <section className="container testominals-container my-5">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-end">
          <div>
            <h5 style={{ color: "#1CC7C1" }}>Testimonial</h5>
            <h1>
              Whats Our Patients <br /> Says
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <img className="img-fluid w-75" src={quote} alt="" />
        </div>
      </div>
        <div className="row pt-5">
          {
            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
          }
        </div>
    </section>
  );
};

export default Testimonials;
