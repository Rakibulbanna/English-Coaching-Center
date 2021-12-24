import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';

import ShowHomePage from '../ShowHomePage/ShowHomePage';
import "./Home.css"
// import bannerimg from './../../image/banner.png';


const Home = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./home.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    // const { name, duration, modeltest, price, img } = course;
   
    return (
<div>
    <div className="carouselsize">

    
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.slidesharecdn.com/setmytest-englishupload-191014112308/95/set-my-test-english-1-638.jpg?cb=1571052396"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>hwh4</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wspucla.files.wordpress.com/2018/01/learnenglish.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>rtjhw</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210618212952/GRE-General-2021-Important-Dates-Exam-Pattern-Syllabus-Score.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>rtjhwehj</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</div>

      
<Container>
            <h2 className="text-center">Our sample courses</h2><br />
            <Row xs={1} md={2} className="g-5">
                {

                    course.map(course =>
                        <ShowHomePage course={course}></ShowHomePage>)
                }
            </Row>
 </Container>

 <br />
 <br />
 <Map></Map>
          
</div>
    );
};

export default Home;