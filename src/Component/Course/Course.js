import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import "./Course.css"

const Course = () => {
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])

    return (
        <Container>
        <h1 className="text-center">Our total Course:{courses.length}</h1>
            <Row xs={1} md={3} className="g-4">
            {
                courses.map(course => <Courses course={course}
                    key={course.id}></Courses>)
            }
            </Row>
        </Container>
            
           
        
    );
};

export default Course;