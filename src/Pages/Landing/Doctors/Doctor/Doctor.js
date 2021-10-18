import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

import docImg from '../../../../images/dev-8.jpg';

const Doctor = (props) => {
    console.log(props.doctor);
    const { name, position, company } = props.doctor;

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 doc-card">
                <Card.Img variant="top" src={docImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{position} at {company}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;