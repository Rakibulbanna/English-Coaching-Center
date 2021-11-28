import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
    const { name, duration, modeltest, price, img } = props.course
    return (
        <div className="course-part">
            {/* <article className="course-info">
                <div className="couse-photo">
                    <img src={img} alt="" />
                </div>
                <div className="course-information">
                    <h4>Course Name:{name}</h4>
                    <p>Duration: <small className="text-info"> {duration} Days</small></p>
                    <h5>Price:{price} taka</h5>
                    <p>Model Test: {modeltest}</p>
                    <button className="order-btn">Order Now</button>
                </div>
            </article> */}
            <Col>
            <Card>
                <Card.Img variant="top" className="couse-photo" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <h4>Course Name:{name}</h4>
                    <p>Duration: <small className="text-info"> {duration} Days</small></p>
                    <h5>Price:{price} taka</h5>
                    <p>Model Test: {modeltest}</p>
                    <button className="order-btn">Order Now</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>


        </div>
    );
};

export default Courses;