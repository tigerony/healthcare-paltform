import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/docs.json')
            .then(response => response.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div className="container my-5">
            <Row sm={1} md={2} lg={3} className="text-center g-5">
                {doctors.slice(0, 6).map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)}
            </Row>
        </div>
    );
};

export default Doctors;