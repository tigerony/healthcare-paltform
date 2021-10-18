import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, image, description } = props.service;
    console.log(props.service);
    return (
        <Col>
            <Card className="h-100 text-center p-3 rounded-3 border-1 item-card">
                <Card.Img variant="top" src={image} style={{ width: '128px', height: '128px' }} className="mx-auto" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Text>
                    {description.slice(0, 75)}
                </Card.Text>
            </Card>
        </Col>
    );
};

export default Service;