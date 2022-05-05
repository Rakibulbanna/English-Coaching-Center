import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Mentors.css"

const Mentors = (props) => {
    const { name, email, img, address, title } = props.mentor
    return (
        <div>
             
            <Card>
                <Card.Img variant="top" className="mentor-photo" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    
                    <p><small className="text-info">{email}</small></p>
                    <h2>{name}</h2>
                    <address>Address:<small className="text-secondary"> {address}</small></address>
                    </Card.Text>
                </Card.Body>
            </Card>
        
        </div>
    );
};

export default Mentors;