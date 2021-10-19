import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const { id, name, imgReg, role, medical } = props.doctor;

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 doc-card">
                <Card.Img variant="top" src={imgReg} />
                <Card.Body className="doc-card-body">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{role} of <span className="fw-bold">{medical}</span></p>
                    </Card.Text>
                    <Link to={`/doctors/${id}`}>
                        <button className="btn btn-outline-dark">More Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;