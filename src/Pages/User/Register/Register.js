import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const { user, signInWithGoogle, signInWithGithub, logout } = useAuth();

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
                {user.email ? <div className="text-center my-4">
                    <h3 className="mb-4 text-primary text-start">Logged in as</h3>
                    <img src={user.photoURL} style={{ width: '96px' }} alt="" />
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <button className="btn btn-outline-dark my-3" onClick={logout}>Logout</button>
                </div>
                    : <div>
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

                        <div className="text-center my-4">
                            <p>or</p>
                            <button className="btn btn-outline-secondary fs-4 me-4" onClick={signInWithGoogle}>{googleIcon}</button>
                            <button className="btn btn-outline-secondary fs-4" onClick={signInWithGithub}>{githubIcon}</button>
                            <br />
                            <p className="text-start mt-3">Already have an account? <Link to="/login" className="redir-link">Login</Link>  as a new user.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;