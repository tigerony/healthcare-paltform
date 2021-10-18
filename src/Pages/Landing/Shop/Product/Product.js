import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, image, price } = props.product;
    console.log(props);

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 item-card">
                <Card.Img variant="top" src={image} />
                <Card.Body className="bg-light">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>${price}</h3>
                    </Card.Text>
                    {/* <Link to={`/doctors/${id}`}>
                        <button className="btn btn-outline-dark">Read More</button>
                    </Link> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;