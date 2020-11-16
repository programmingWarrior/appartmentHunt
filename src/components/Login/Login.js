import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    // const [user, setUser] = useState({
    //     name:'',
    //     email:'',
    //     error:'',
    //     isLoggedIn:false
    // })

    // google login
    const  googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            // handleResponse(res)
          })
          .catch(error => {
            // handleError(error)
          });
    }

    // facebook login
    const fbLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            // handleResponse(res)
          })
          .catch(error => {
            // handleError(error)
          });
    }

    // //handle response
    // const handleResponse = res => {
    //     const {displayName, email} = res.user;
    //     const signedInUser = {
    //         name:displayName,
    //         email:email,
    //         isLoggedIn:true
    //     };
    //     setUser(signedInUser);
    // }

    // //handle error
    // const handleError = error => {
    //     const signedInUser = {
    //         error:error.message,
    //         isLoggedIn:false
    //     };
    //     setUser(signedInUser)
    // }

    return (
        <div>
            <Navbar/>
            <div style={{width:'450px'}} className=" mx-auto mt-4 mb-5">
                <div className="rounded border px-5 py-4">
                    <h4 className="font-weight-bold mb-4">Create an account</h4>
                    <form >
                        {
                            newUser && 
                            <div>
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    />
                                </div>
                            </div>
                            
                        }
                        <div className="form-group">
                            <input type="email" className="form-control" 
                            name="email"
                            placeholder="Email"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" 
                            name="password"
                            placeholder="Password"
                            required
                            />
                        </div>
                        {
                            newUser &&
                            <div className="form-group">
                                <input type="password" className="form-control" 
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                />
                            </div>
                        }
                        <button className="btn btn-primary form-control">Create an account</button>
                        <p className="text-center mt-3">{newUser ? 'Already have an account?' : "Don't have an account?"} <span style={{cursor:'pointer'}} onClick={() => setNewUser(!newUser)} className="text-success">{ newUser ? 'Login' : 'Create an account'}</span></p>
                    </form>
                </div>

                <p className="text-center font-weight-bold my-2">or</p>
                <button onClick={fbLogin} className='border rounded-pill mt-3 row d-flex justify-content-between align-items-center py-2 btn mx-5'>
                    <img className='w-100 col-2 pl-0' src="https://iili.io/Fx0nLX.png" alt=""/>
                    <h6 className="col-10 m-0">Continue with Facebook</h6>
                </button>
                <button onClick={googleLogin} className='border rounded-pill mt-3 row d-flex justify-content-between align-items-center py-2 btn mx-5'>
                    <img className='w-100 col-2 pl-0' src="https://i.ibb.co/pZbCcqY/1004px-Google-G-Logo-svg.png" alt=""/>
                    <h6 className="col-10 m-0">Continue with Google</h6>
                </button>
            </div>
        </div>
    );
};

export default Login;