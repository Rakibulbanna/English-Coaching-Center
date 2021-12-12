import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './../../App.css';
const ShowHomePage = (props) => {
    const { id,name, duration, modeltest, price, img, detail } = props.course
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
                    <button type="button" className="btn bt-background text-black mt-3" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                        view
                    </button>
                </Card.Body>
                <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body c">
                                    <img src={img} alt="" />
                                    <h4>{detail}</h4>
                                </div>

                                <div className="modal-footer">
                                <button type="button" className="btn bt-background text-black mt-3" data-bs-dismiss="modal">Close</button>

                                </div>

                            </div>
                        </div>
                    </div>
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