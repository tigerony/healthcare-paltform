import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { id, name, image, price } = props.product;

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 shadow-sm product-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>${price}</h3>
                    </Card.Text>
                    <Link to={`/products/${id}`}>
                        <button className="btn btn-outline-secondary">Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;