import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../../Doctors/Doctor/Doctor';
import docImg from '../../../../images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './HomeDoctors.css';

const goIcon = <FontAwesomeIcon icon={faChevronCircleRight} />;

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus-data/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0, 5)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Top Lead Doctors</h2>
            <Row xs={1} sm={2} md={2} lg={3} className="g-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
                <Col className="doc-more">
                    <Link to="/doctors">
                        <Card className="h-100 rounded-3 border-3 shadow-sm text-center doc-more-card">
                            <Card.Img variant="top" src={docImg} />
                            <Card.Body>
                                <p className="fs-2 fw-bold text-center">More doctors {goIcon}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default HomeDoctors;