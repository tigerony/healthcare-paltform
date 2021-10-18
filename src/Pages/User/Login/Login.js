import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <div className="container my-5 form-container">
            <div className="shadow-lg rounded-3 mx-auto user-form">
                <h3 className="mb-4 text-primary">Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="text-center my-4">
                    <p>or</p>
                    <button className="btn btn-secondary" onClick={signInWithGoogle}>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;