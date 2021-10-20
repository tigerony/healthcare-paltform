import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../../Doctors/Doctor/Doctor';

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0, 4)));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center text-info my-5">Our doctors [home]</h2>
            <Row xs={1} sm={2} md={3} lg={3} className="g-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
            <Link to="/doctors">
                <button className="btn btn-primary my-3">See all doctors</button>
            </Link>
        </div>
    );
};

export default HomeDoctors;