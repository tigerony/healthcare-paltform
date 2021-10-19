import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DoctorDetails.css';

const DoctorDetails = () => {
    const { docId } = useParams();
    const [doctorsDetails, setDoctorsDetails] = useState([]);
    const [docDetails, setDocDetails] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctorsDetails(data));
    }, []);

    useEffect(() => {
        const doctorInfo = doctorsDetails.find(docDetail => docDetail?.id == docId);
        setDocDetails(doctorInfo);
    }, [doctorsDetails]);

    return (
        <div className="container my-5">
            <div className="doc-info-card mx-auto">
                <div className="doctor-info">
                    <img src={docDetails?.imgWide} alt="" />
                    <div className="text-center my-3">
                        <h1 className="fw-bold text-primary">{docDetails?.name}</h1>
                        <p className="fs-3 fw-bold"><span className="text-secondary">{docDetails?.role}</span> of {docDetails?.medical}</p>
                        <p className="fs-4 fw-bold">{docDetails?.country}</p>
                        <p className="text-muted">{docDetails?.experience} Years of Experience</p>
                    </div>
                    <hr />
                    <div>
                        <p className="fs-4 fw-bold text-center text-info">Patient Check Up Time</p>
                        <Row sm={2} md={2} lg={2} className="text-center border border-1 my-2 g-3 work-time">
                            <Col>
                                <p>Monday-Friday</p>
                                <p>Saturday</p>
                                <p>Sunday</p>
                            </Col>
                            <Col>
                                <p>08: 00 - 17: 00</p>
                                <p>10: 00 - 16: 00</p>
                                <p>12: 00 - 14: 00</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DoctorDetails;