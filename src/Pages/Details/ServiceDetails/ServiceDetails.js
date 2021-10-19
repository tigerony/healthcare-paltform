import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { srvId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, []);

    useEffect(() => {
        const serviceInfo = serviceDetails.find(srvDetail => srvDetail?.id == srvId);
        setDetails(serviceInfo);
    }, [serviceDetails]);

    return (
        <div className="container my-5">
            <div className="d-sm-flex srv-detail-card px-3 px-sm-0">
                <div>
                    <img src={details?.image} alt="" />
                </div>
                <div className="ms-3">
                    <p className="fs-3 fw-bold text-info">{details?.name}</p>
                    <p>{details?.description}</p>
                    <p>{details?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;