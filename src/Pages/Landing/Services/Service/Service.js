import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, image } = props.service;

    return (
        <Col>
            <Card className="h-100 text-center p-3 rounded-3 border-1 service-card">
                <Card.Img variant="top" src={image} style={{ width: '128px', height: '128px' }} className="mx-auto" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Link to={`/services/${id}`}>
                    <button className="btn btn-outline-info">Details</button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;