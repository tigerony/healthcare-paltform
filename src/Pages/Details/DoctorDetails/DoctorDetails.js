import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DoctorDetails.css';

const DoctorDetails = () => {
    const { docId } = useParams();

    const [docDetails, setDocDetails] = useState([]);
    const [details, setDetails] = useState({});

    const coverImg = `${details?.imgWide}`;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/doctors.json')
            .then(res => res.json())
            .then(data => setDocDetails(data));
    }, []);

    useEffect(() => {
        const doctorInfo = docDetails.find(docDetail => docDetail?.id == docId);
        setDetails(doctorInfo);
    }, [docDetails]);

    return (
        <div>
            <div className="cover-img" style={{ backgroundImage: `url(${coverImg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', height: '90vh' }}>
                {/* background image goes here */}
            </div>
            <div className="container my-5">
                <div className="doc-info-card mx-auto">
                    <div className="doctor-info">
                        <div className="text-center my-3">
                            <h1 className="fw-bold text-primary">{details?.name}</h1>
                            <p className="fs-3 fw-bold"><span className="text-secondary">{details?.role}</span> of {details?.medical}</p>
                            <p className="fs-4 fw-bold">{details?.country}</p>
                            <p className="text-muted">{details?.experience} Years of Experience</p>
                        </div>
                        <hr />
                        <div>
                            <p className="fs-4 fw-bold text-center text-info">Patient Check Up Time</p>
                            <Row sm={2} md={2} lg={2} xl={2} className="text-center border border-1 my-2 g-3 work-time">
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
            </div>
        </div >
    );
};

export default DoctorDetails;