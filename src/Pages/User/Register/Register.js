import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    /* const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
 */
    const handleUserEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }

    const createNewUserWithEmail = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className="container my-5 py-5 form-container">
            <div className="shadow-lg rounded-3 mx-auto user-form">
                <h3 className="mb-4 text-primary">Registration</h3>
                <Form onSubmit={createNewUserWithEmail}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleUserPassword} type="password" placeholder="Enter password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <p className="text-start mt-3">Already have an account? <Link to="/login">Login</Link>  as an existing user.</p>
            </div>
        </div>
    );
};

export default Register;