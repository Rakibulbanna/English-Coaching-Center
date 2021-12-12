import { Button, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../App';
import './Login.css';
import {getAuth,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";

import initializeAuthentication from './../../Firebase/firebase.initialize';


const provider = new GoogleAuthProvider();
initializeAuthentication();

const Login = () => {

    const auth = getAuth();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleRegistration = (e)=>{
        e.preventDefault();
        console.log(email,password);

        if(password.length<6){
            setError('Password must be 6 carecter !');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
         
          const user = result.user;
          console.log(user);
      
        })
        .catch((error) => {
         
       console.log(error.message);
         
        });
        
    }

    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
    const handlePasswprdChange = (e) =>{
        setPassword(e.target.value);
    }
    //--------------Accout creation by google
    const [user,setuser] = useState({});

  const handleGoogleSignIn = () => {
signInWithPopup(auth, provider)
.then((result) => {

  const {displayName,email, photoURL }= result.user;
  const loggedInUser = {
    name: displayName,
    email: email,
    photo: photoURL
  };
  setuser(loggedInUser);

}).catch((error) => {

console.log(error.message);
  
})
}

const handleSignOut = () => {
  signOut(auth)
  .then(() => {
    setuser({});
  })
}
    return (
        <div className="form-body">
            <br />
            {
                !user.name ?<div className="">
                    {/* <form onSubmit={handleRegistration}>
                        <h3>Please enter your email</h3>
                        <label htmlFor="email" >Email: </label>
                        <input type="email" name="email" /><br /><br />
                        <label htmlFor="email" >password: </label>
                        <input type="password" name="password" /><br /><br />
                        <input type="submit" value="Register"/>
                    </form> */}
                    
                    <Button variant="outline-dark" onClick={handleGoogleSignIn}><i className="fab fa-google"><br />sign with google</i></Button>
                    <h2>Pleace give your Information for account creation</h2><br />

            <Form onSubmit={handleRegistration}>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCity">
                        <Form.Label>University ID :</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail"onChange={handleEmailChange}  required>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword"onChange={handlePasswprdChange} required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                </Row>
                <Form.Group controlId="formGridState">
                    <Form.Label>Department</Form.Label>
                    <Form.Select defaultValue="SWE">
                        <option>SWE</option>
                        <option>CSE</option>
                        <option>EEE</option>
                        <option>ETE</option>
                        <option>MCT</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formGridState">
                    <Form.Label>Campus</Form.Label>
                    <Form.Select defaultValue="Dhanmondi">
                        <option>Dhanmondi</option>
                        <option>Permenanrt</option>
                        <option>Uttara</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="btn" variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
<br />


                    
                </div> :
                <div><h2>{user.email}</h2>
                    <img src={user.photo} alt="" />
                <Button variant="outline-dark" onClick={handleSignOut}>sign out</Button>
            </div>
            }
            
            
        </div>
    );
};

export default Login;