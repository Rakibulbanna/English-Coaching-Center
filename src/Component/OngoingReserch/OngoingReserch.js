import { Button } from 'bootstrap';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import './OngoingResearch.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const OngoingReserch = () => {
    
    return (
        <div className='main-div'>
          <h2>Enter the required information for finding course suitable for you </h2><br />
            <Form>
  <Row xs={1} md={2}>
    <Form.Group  controlId="formGridEmail">
      <Form.Label><h5>Write the topic</h5></Form.Label>
      <Form.Control type="email" placeholder="Enter topic" />
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label><h5>Target project type you want to make</h5></Form.Label>
      <Form.Control type="password" placeholder="Enter project type" />
    </Form.Group>
  </Row>
<br />

<Row xs={1} md={3}>
    <Form.Group  controlId="formGridCity">
      <Form.Label><h5>Duration limit of your course</h5></Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  controlId="formGridState">
      <Form.Label><h5>All in one ? Or Bootcamp ?</h5></Form.Label>
      <Form.Select defaultValue="All in one">
        <option>All in one</option>
        <option>Bootcamp</option>
      </Form.Select>
    </Form.Group>

    <Form.Group  controlId="formGridZip">
      <Form.Label><h5>price range</h5></Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label><h5>Enter some Topic from your intereste </h5></Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>


      <button className='buttonStyle'>
    submit
  </button>

  
</Form>

   </div>   
    );
};

export default OngoingReserch;