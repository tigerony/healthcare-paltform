import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center my-5 text-center error">
            <div>
                {/* <p className="fs-1 m-0">{repair}</p> */}
                <p className="text-muted"><small>couldn't repair</small></p>
                <h1 className="text-danger fw-bold">Error 404</h1>
                <p className="text-secondary">The requested URL was not found on the server</p>

                {/* <p>Visit <Link to="/home" className="redir-url">Home</Link> until the problem is resolved</p> */}
            </div>
        </div>
    );
};

export default NotFound;