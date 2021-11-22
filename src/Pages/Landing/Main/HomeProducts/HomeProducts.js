import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../../Shop/Product/Product';
import pdImg from '../../../../images/products.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './HomeProducts.css';

const goIcon = <FontAwesomeIcon icon={faChevronCircleRight} />;

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus-data/main/products.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 4)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Featured Products</h2>
            <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-5">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
                <Col className="pd-more">
                    <Link to="/shop">
                        <Card className="h-100 rounded-3 border-3 shadow-sm text-center pd-more-card">
                            <Card.Img variant="top" src={pdImg} />
                            <Card.Body>
                                <p className="fs-2 fw-bold text-center mt-md-5 mt-lg-5 mt-xl-0">More products {goIcon}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default HomeProducts;