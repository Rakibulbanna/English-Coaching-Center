import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './../../App.css';
const ShowHomePage = (props) => {
    const { name, duration, modeltest, price, img } = props.course
    return (
                <Col>
            <Card>
                <Card.Img variant="top" className="mentor-photo" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                   
                    <p>Duration: <small className="text-info"> {duration} Days</small></p>
                    <h5>Price:{price} taka</h5>
                    <p>Model Test: {modeltest}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
           
            
       
    );
};

export default ShowHomePage;







// import React from 'react';

// const Enter = (props) => {
//     const { name, duration, modeltest, price, img } = props.course

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Enter;