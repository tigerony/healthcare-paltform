import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
        console.log(doctorInfo);
    }, [doctorsDetails]);

    return (
        <div className="container my-5 py-4">
            <h5>Doctor details of {docId}</h5>
            <h3>{docDetails?.name}</h3>
        </div>
    );
};

export default DoctorDetails;