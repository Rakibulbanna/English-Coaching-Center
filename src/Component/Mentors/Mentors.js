import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Mentors.css"

const Mentors = (props) => {
    const { name, email, img, address, titel } = props.mentor
    return (
        <div className="mentor-part">
            {/* <article className="mentor-sub-part">
                <div className="mentor-image text-center">
                    <img src={img} alt="" />
                </div>
                <div className="mentor-information text-center">
                    <h4>Name:{name}</h4>
                    <p><small className="text-info">{email}</small></p>
                    <h2>{titel}</h2>
                    <address>Address:<small className="text-warning"> {address}</small></address>
                </div>

            </article> */}
             <Col>
            <Card>
                <Card.Img variant="top" className="mentor-photo" src={img} />
                <Card.Body>
                    <Card.Title>{titel}</Card.Title>
                    <Card.Text>
                    
                    <p><small className="text-info">{email}</small></p>
                    <h2>{name}</h2>
                    <address>Address:<small className="text-warning"> {address}</small></address>
                    <button className="order-btn">Order Now</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default Mentors;