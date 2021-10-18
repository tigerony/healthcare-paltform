import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    console.log(props.doctor);
    const { id, name, imgReg, role, medical } = props.doctor;

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 item-card">
                <Card.Img variant="top" src={imgReg} />
                <Card.Body className="bg-light">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{role} of <span className="fw-bold">{medical}</span></p>
                    </Card.Text>
                    <Link to={`/doctors/${id}`}>
                        <button className="btn btn-outline-dark">Read More</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;