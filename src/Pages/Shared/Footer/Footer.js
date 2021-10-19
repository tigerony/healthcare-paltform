import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <Row xs={1} md={2} lg={4}>
                    <Col>
                        <p className="fs-3 fw-bold text-primary">REVIVE PLUS</p>
                        <p>info@revive-plus.web.app</p>
                        <p>help@revive-plus.web.app</p>
                        <p>subscribe@revive-plus.web.app</p>
                    </Col>
                    <Col>
                        <p>EXPLORE</p>
                        <Nav className="d-flex flex-column">
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p>SOCIAL</p>
                        <Nav.Link href="">Facebook</Nav.Link>
                        <Nav.Link href="">Instagram</Nav.Link>
                        <Nav.Link href="">Twitter</Nav.Link>
                    </Col>
                    <Col>
                        <p>About Us</p>
                        <p>We are amongst the largest hospital consultants in the world. We are the planning, implementation and operations management arm of the Revive Plus Group, Asia’s largest integrated healthcare services provider. We are the trusted advisor of investors, Governments and other entities.</p>
                    </Col>
                </Row>
                <div className="text-center my-5">
                    <p><small>Copyright 2021, Revive Plus</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;