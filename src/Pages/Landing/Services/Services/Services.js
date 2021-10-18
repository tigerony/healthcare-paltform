import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Our Provided Services</h2>
            <Row sm={1} md={2} lg={4} className="g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;