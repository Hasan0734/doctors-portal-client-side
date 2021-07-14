import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import loginBg  from '../../../images/login-bg.png'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
const [error, setError] = useState(false)
const [loggedInUser, setLoggedInUser] = useContext(UserContext)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    createUserEmailWithPassword(data.email, data.password)
    if(error){
      signInWithEmailAndPassword(data.email, data.password)
    }
  };
  
  const createUserEmailWithPassword =(email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const {email} = userCredential.user;
       setLoggedInUser({email: email});
       storeAuthToken();
    })
    .catch((error) => {
      setError(true)
      console.log(error.message)
    });
  }
  const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    const {email} = result.user
    setLoggedInUser({email: email});
    storeAuthToken();
  }).catch((error)=> {
   console.log(error)
  });
  }

  const storeAuthToken = ()=>{
    firebase.auth().currentUser.getIdToken(true)
    .then(function(idToken) {
    sessionStorage.setItem('token', idToken)
    history.replace(from);
    }).catch(function(error) {
     console.log(error)
    });
  }
  return (
    <section className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-4">
            
         <div className="login-form card">
         <h5 className="text-center my-5">Login</h5>
         <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              {...register("email", { required: true, pattern : /\S+@\S+\.\S+/})}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
            <br />
            <input
            type="password"
              className="form-control"
              {...register("password", { required: true, minLength: 6})}
              placeholder="Passwrod"
            />
            {errors.password && <span className="text-danger">Password is required</span>}
            <br />
            <input className="form-control btn main-button"  type="submit" />
          </form>
         </div>
        </div>
        <div className="col-md-8 d-flex justify-content-end">
            <img  src={loginBg} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Login;
