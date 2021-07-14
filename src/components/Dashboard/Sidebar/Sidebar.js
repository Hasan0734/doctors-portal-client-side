import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCog,
  faNotesMedical,
  faSignOutAlt,
  faUserFriends,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://calm-shelf-07611.herokuapp.com/isDoctor", { 
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({email: loggedInUser.email})
     })
     .then(res => res.json())
     .then(data =>setIsDoctor(data))
  }, [])
  return (
    <div className="sidebar-area">
      <div className="dashboard-title">
        <ul className="list-unstyled underline-none">
          <li>
           <Link className="text-decoration-none text-white"  to="/doctor/dashboard"> <FontAwesomeIcon className="me-3" icon={faBars} />Dashboard</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-white"  to="/doctor/appointment"><FontAwesomeIcon className="me-3" icon={faCalendar} />Appointment</Link>
          </li>
             {
               isDoctor && <div>
                <li>
                  <Link  className="text-decoration-none text-white" to="/doctor/patients"><FontAwesomeIcon className="me-2" icon={faUserFriends} />Patients</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white"  to="/doctor/prescriptions"><FontAwesomeIcon className="me-3" icon={faNotesMedical} />Prescriptions</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white"  to="/addDoctor"><FontAwesomeIcon className="me-3" icon={faUserPlus} />Add Doctor</Link>
                </li>
                <li>
                <Link className="text-decoration-none text-white"  to="/doctor/setting"><FontAwesomeIcon className="me-2" icon={faCog} />Setting</Link>
                
                </li>
            </div>
             }
          <li style={{marginTop: '100%'}}>
           <FontAwesomeIcon className="me-2" icon={faSignOutAlt} />Log Out
             
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
