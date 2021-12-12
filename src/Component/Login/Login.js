import { Button, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../App';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut,signInWithEmailAndPassword } from "firebase/auth";

import initializeAuthentication from './../../Firebase/firebase.initialize';


const provider = new GoogleAuthProvider();
initializeAuthentication();

const Login = () => {

    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin,setisLogin] = useState(false);


    const handleRegistration = (e) => {
        e.preventDefault();
        
        if (password.length < 6) {
            setError('Password must be 6 carecter !');
            return;
        }

        isLogin ? ProcessLogIn(email, password) : CreateNewUser(email, password);
       

    }


    const ProcessLogIn = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
         
          const user = result.user;
          setuser(user);
          console.log(user);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const CreateNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {

            const user = result.user;
            setuser(user);

        })
        .catch((error) => {

            setError(error.message);

        });
    }




    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswprdChange = (e) => {
        setPassword(e.target.value);
    }

    //---------Accout creation by google

    const [user, setuser] = useState({});

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
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

    const toggleLogIn = e =>{
        setisLogin(e.target.checked);
    }
    return (
        <div className="form-body">
            <br />
            {
                !user.email ? <div>
                    {/* <form onSubmit={handleRegistration}>
                        <h3>Please enter your email</h3>
                        <label htmlFor="email" >Email: </label>
                        <input type="email" name="email" /><br /><br />
                        <label htmlFor="email" >password: </label>
                        <input type="password" name="password" /><br /><br />
                        <input type="submit" value="Register"/>
                    </form> */}

                    <Button variant="outline-dark" onClick={handleGoogleSignIn}><i className="fab fa-google"><br />sign with google</i></Button><br /><br />
                    
                    <h2>{isLogin ? <div className='text-center'>Log in</div> : "Pleace give your Information for account creation"} </h2><br />

                    <Form onSubmit={handleRegistration}>
                        <Row className="mb-3">
                        
                            <Form.Group controlId="formGridEmail" onChange={handleEmailChange} required>
                                <Form.Label >Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" onChange={handlePasswprdChange} required>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                           <br />
                           <br />
                            <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Alrady have account?" onChange={toggleLogIn} />
                        </Form.Group>
                        </Row>
                        <div className='="row mb-3 text-danger'>{error}</div>
                        <Button className="btn" variant="outline-dark" type="submit">
                        {isLogin ? "Log in" : "Register"}
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