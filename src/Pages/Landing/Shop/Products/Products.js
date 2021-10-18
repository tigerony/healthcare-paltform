import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="container my-5 py-4">
            <h2 className="text-center text-info my-5">Available Products</h2>
            <Row xs={1} md={2} lg={4} className="text-center g-5">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;