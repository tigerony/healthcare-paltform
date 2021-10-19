import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { docId } = useParams();

    return (
        <div className="container my-5 py-4">
            <h5>Doctor details of {docId}</h5>
        </div>
    );
};

export default DoctorDetails;