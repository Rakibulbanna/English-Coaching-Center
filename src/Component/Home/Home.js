import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowHomePage from '../ShowHomePage/ShowHomePage';
import "./Home.css"

const Home = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./home.JSON")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    // const { name, duration, modeltest, price, img } = course;

    return (

              <Container>
              <h2 className="text-center">Our sample courses</h2><br />
              <Row xs={1} md={3} className="g-4">
               {
                   
                       course.map(course => 
                    <ShowHomePage course={course}></ShowHomePage>)
               } 
               </Row>
           </Container>
    );
};

export default Home;