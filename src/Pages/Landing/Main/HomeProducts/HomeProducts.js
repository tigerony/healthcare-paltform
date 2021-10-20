import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../../Shop/Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/products.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 4)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Featured Products</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </Row>
            <Link to="/shop">
                <button className="btn btn-primary my-3">See all products</button>
            </Link>
        </div>
    );
};

export default HomeProducts;