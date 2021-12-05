import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import './Accountcreation.css';
const Accountcreation = () => {
    return (
        <div className="form-body">
            <h2>Pleace give your Information for account creation</h2><br />

            <Form>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCity">
                        <Form.Label>University ID :</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                </Row>
                <Form.Group controlId="formGridState">
                    <Form.Label>Department</Form.Label>
                    <Form.Select defaultValue="SWE">
                        <option>SWE</option>
                        <option>CSE</option>
                        <option>EEE</option>
                        <option>ETE</option>
                        <option>MCT</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formGridState">
                    <Form.Label>Campus</Form.Label>
                    <Form.Select defaultValue="Dhanmondi">
                        <option>Dhanmondi</option>
                        <option>Permenanrt</option>
                        <option>Uttara</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>



                    <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="btn" variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Accountcreation;