import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus-data/main/doctors.json')
            .then(response => response.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Our Team</h2>
            <Row xs={1} sm={2} md={2} lg={3} className="text-center g-5">
                {doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)}
            </Row>
        </div>
    );
};

export default Doctors;