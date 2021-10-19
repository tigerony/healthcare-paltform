import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';

import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    }

    const handleRegister = () => {
        history.push('/register');
    }

    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Container className="flex-column flex-md-row">
                <img style={{ width: '48px', padding: '4px' }} src={logo} alt="" />
                <Nav className="text-center flex-column flex-sm-row my-2 my-sm-2 my-md-0">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/doctors">Doctors</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Nav>
                {user.email ? <div className="d-flex align-items-center my-2 my-md-0">
                    <h5 className="mx-2 text-primary fw-bold m-0">{user.displayName}</h5>
                    <img className="mx-2 user-icon" src={user.photoURL} alt="" />
                    <button className="btn btn-outline-dark" onClick={logout}>Logout</button>
                </div>
                    : <div>
                        <button className="btn btn-outline-secondary me-2" onClick={handleLogin}>Login</button>
                        <button className="btn btn-warning" onClick={handleRegister}>Register</button>
                    </div>}
            </Container>
        </Navbar>
    );
};

export default Header;
