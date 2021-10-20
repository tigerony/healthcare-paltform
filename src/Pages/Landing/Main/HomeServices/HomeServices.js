import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';
import srvImg from '../../../../images/services.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './HomeServices.css';

const goIcon = <FontAwesomeIcon icon={faChevronCircleRight} />;

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Top Services</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                <Col className="srv-more">
                    <Link to="/services">
                        <Card className="p-3 h-100 rounded-3 shadow-sm border-3 text-center srv-more-card">
                            <Card.Img variant="top" src={srvImg} className="" style={{ width: '128px', height: '128px', margin: '0 auto' }} />
                            <Card.Body>
                                <p className="fs-4 fw-bold text-center">More services {goIcon}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default HomeServices;