import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;

const Footer = () => {

    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <Row xs={1} md={2} lg={4} className="g-3">
                    <Col>
                        <p className="fs-3 fw-bold text-warning">REVIVE PLUS</p>
                        <p><span className="me-2">{phoneIcon}</span> 012 3456 789</p>
                        <p><span className="me-2">{envelopeIcon}</span> info@revive-plus.web.app</p>
                        <p><span className="me-2">{envelopeIcon}</span> help@revive-plus.web.app</p>
                        <p><span className="me-2">{envelopeIcon}</span> news@revive-plus.web.app</p>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">EXPLORE</p>
                        <Nav className="d-flex flex-column">
                            <Nav.Link as={Link} to="/services" className="fs-5">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors" className="fs-5">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="fs-5">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="fs-5">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">SOCIAL</p>
                        <Nav className="gap-3">
                            <Nav.Link href="https://www.facebook.com/" target="_blank" className="fs-3">{facebookIcon}</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/" target="_blank" className="fs-3">{instagramIcon}</Nav.Link>
                            <Nav.Link href="https://www.twitter.com/" target="_blank" className="fs-3">{twitterIcon}</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">ABOUT US</p>
                        <p>We are amongst the largest hospital consultants in the world. We are the planning, implementation and operations management arm of the Revive Plus Group, Asia’s largest integrated healthcare services provider. We are the trusted advisor of investors, Governments and other entities.</p>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <p className="text-muted"><small>Copyright 2021, Revive Plus</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;