import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Shop from '../shop/Shop';
import "./Course.css"
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Course = () => {
    
    const { user } = useAuth();
    return (
        <div>
            
            {/* {
                (user.email && user.displayName) ? <Shop></Shop> : <div className='text-center m-5'><h1>Your are not log in</h1><br />
                <Link exact to="/login" className="navbar-brand text-brown link-course" >go to log in</Link></div>
            } */}
            <Shop></Shop>
        </div>
       
            
             
        
  
    );
};

export default Course;