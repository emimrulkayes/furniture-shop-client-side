import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import GoogleLogo from '../../../../images/GoogleLogo.png';
import {Link} from 'react-router-dom';



const Logout = () => {
    return (
        <Container>
        <Row>
            <Col className='m-auto' xs={12} sm={12} md={6} lg={4}>
                <Form className='user-input'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Button className='btn login-btn' type="submit"> Register </Button>
                </Form>     
                <Form.Text> Already have an account? <Link className='form-link' to="/login">Login</Link> </Form.Text> <br/>
                <Form.Text className='alternative-line'> or </Form.Text> <br/>
                <Button className='submit-google-btn rounded ' variant="primary" type="submit">
                <img src={GoogleLogo} alt="Google" /> Continue with google  </Button>
            </Col>
        </Row>
    </Container>
    );
};

export default Logout;