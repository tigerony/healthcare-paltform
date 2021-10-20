import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Our Provided Services [home]</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
            <Link to="/services">
                <button className="btn btn-primary my-3">See all services</button>
            </Link>
        </div>
    );
};

export default HomeServices;