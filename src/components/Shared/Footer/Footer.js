import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div  className="container pt-5">
        <div style={{marginTop: '95px'}} className="row">
          <div className="col-md-3 mt-5">
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none" href="#">
                  Emergency Dental Care
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Treatment and Personal Diseases
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Tooth Extraction
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled mt-4">
              <li>
                <a className="text-decoration-none" href="#">
                  Emergency Dental Care
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Treatment and Personal Diseases
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Tooth Extraction
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Oral Health</h5>
            <ul className="list-unstyled mt-4">
              <li>
                <a className="text-decoration-none" href="#">
                  Emergency Dental Care
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Treatment and Personal Diseases
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Tooth Extraction
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Check up
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <div>
              <h5>Our Address</h5>
                <ul className="list-unstyled mt-4">
                <li >
                <a className="text-decoration-none" href="#">
                  New York - 101010 Hudson <br /> Yards
                </a>
              </li>
                </ul>
              <div className="d-flex my-5">  
                 <div className="brand-icon">
                 <FontAwesomeIcon icon={faFacebookF} />
                 </div>
                  <div className="brand-icon">
                  <FontAwesomeIcon  icon={faGoogle} />
                  </div>
                  <div className="brand-icon">
                  <FontAwesomeIcon  icon={faTwitter} />
                  </div>
              </div>
              <p>Call Now</p>
              <button className="btn main-button">+880 17XXXXXXXX</button>
            </div>
          </div>
        </div>
        <p className="text-center text-muted mt-5">Copyright {(new Date()).getFullYear()} All Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
