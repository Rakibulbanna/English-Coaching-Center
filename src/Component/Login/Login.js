import { Button, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../App';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import {Link} from 'react-router-dom';

const Login = (e) => {

    const {user,
        error,
        handleGoogleSignIn,
        handleSignOut,
        toggleLogIn,
        setisLogin,
        isLogin,
        handleRegistration,
        ProcessLogIn,
        CreateNewUser,
        verifyEmail,
        setUserName,
        handleNameChange,
        handleEmailChange,
        handlePasswprdChange} = useAuth();
   
    return (
        <div className="form-body">
            <br />
            {
                !(user.email && user.displayName) ? <div>

                    <Button variant="outline-dark" onClick={handleGoogleSignIn}><i className="fab fa-google"><br />sign with google</i></Button><br /><br />
                    
                    <h2>{isLogin ? <div className='text-center'>Log in</div> : "Pleace give your Information for account creation"} </h2><br />

                    <Form onSubmit={handleRegistration}>
                        <Row className="mb-3">
                        
                            {!isLogin && <Form.Group controlId="formGridEmail" onChange={handleNameChange} required>
                                <Form.Label >Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>}

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



                </div> : <div><h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                        <img src={user.photo} alt="" />
                        
                    </div>
            }


        </div>
    );
};

export default Login;