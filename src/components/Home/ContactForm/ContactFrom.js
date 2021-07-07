import React from "react";
import "./ContactForm.css";
const ContactFrom = () => {
  return (
    <section className="contact-container">
      <div style={{marginTop: '80px', paddingTop: '60px'}} className="container">
        <div style={{ width: "720px", margin: "auto" }}>
          <div className="text-center pt-5">
            <h5 style={{ color: "#1CC7C1" }}>CONTACT US</h5>
            <h1 className="text-white">Always Connect with us</h1>
          </div>
          <form action="">
            <input
              className="form-control"
              type="text"
              placeholder="Email Address*"
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Subject*"
            />
            <br />
            <textarea className="form-control" style={{height: '250px', width: '100%', resize: 'none'}} placeholder="Message*"></textarea>
            <br />
            <button className="btn text-white px-5 py-2 ms-auto" style={{background: 'linear-gradient(90deg, #18D3B8, #4EDCEC)'}}>SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
