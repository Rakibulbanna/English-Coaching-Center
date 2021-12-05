import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Shop from '../shop/Shop';
import "./Course.css"

const Course = () => {
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])

    return (
        <div>
            <Shop></Shop>  
        </div>
  
    );
};

export default Course;