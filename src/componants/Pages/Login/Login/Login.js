import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import GoogleLogo from '../../../../images/GoogleLogo.png';
import './Login.css';

const Login = () => {
    return (
        <Container>
            <Row>
                <Col className='m-auto' xs={12} sm={12} md={6} lg={4}>
                    <Form className='user-input'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className='btn login-btn' type="submit"> Login </Button>
                    </Form>     
                    <Form.Text> New to Furniture Shop? <Link className='form-link' to="/logout">Create an account</Link> </Form.Text> <br/>
                    <Form.Text className='alternative-line'> or </Form.Text> <br/>
                    <Button className='submit-google-btn rounded ' variant="primary" type="submit">
                    <img src={GoogleLogo} alt="Google" /> Continue with google  </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;