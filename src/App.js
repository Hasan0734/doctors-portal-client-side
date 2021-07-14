import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AllPrescriptions from './components/AllPatients/AllPrescriptions/AllPrescriptions';
import Appointment from './components/Appointment/Appointment/Appointment';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard/DoctorDashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <PrivateRoute path="/dashboard/">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/doctor/patients">
          <AllPatients/>
        </PrivateRoute>
        <PrivateRoute path="/doctor/prescriptions">
          <AllPrescriptions/>
        </PrivateRoute>
        <PrivateRoute path="/doctor/appointment">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/doctor/dashboard">
          <DoctorDashboard/>
        </PrivateRoute>
        <PrivateRoute path="/addDoctor">
          <AddDoctor/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
};

export default App;