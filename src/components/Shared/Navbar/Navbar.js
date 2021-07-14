import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/home"
                 className="nav-link ms-5 active" aria-current="page" href="#">
                 Home
               
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor/patients" className="nav-link ms-5" href="/home">
                  Patient
                </Link>
              </li>
              <li  className="nav-item">
                <Link to="/dashboard" className="nav-link ms-5" href="#">
                   Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white" href="#">
                Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
