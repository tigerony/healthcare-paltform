
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const checkSq = <FontAwesomeIcon icon={faCheckSquare} />;

const About = () => {
    return (
        <div className="container my-5">
            <div className="cover-banner">
                <p className="fs-1 fw-bold text-info text-center mb-5">Revive Plus</p>
            </div>
            <div>
                <h3>Who We Are?</h3>
                <p>We are amongst the largest hospital consultants in the world. We are the planning, implementation and operations management arm of the Revive Plus Group, Asia’s largest integrated healthcare services provider. We are the trusted advisor of investors, Governments and other entities who wish to establish world-class healthcare facilities or improve the clinical quality and operating efficiencies of existing healthcare facilities. Our healthcare consulting assignments across the globe are a testimony to our ability to work effectively with the “local” people, respecting their social, cultural and traditional ways. We have worked on establishing and operating healthcare facilities spread across culturally diverse geographies. We are part of a world-class institution which has many firsts to its credit in Bangladesh and the Asian region. We have a domain expertise of over quarter of a century in healthcare. Revive Plus is one group in the world, to have a comprehensive and leading presence across the entire healthcare space - primary, secondary and tertiary care, pharmacy operations, health insurance, healthcare consulting, health informatics, nursing education and post graduate training for doctors.</p>
            </div>
            <div>
                <h3>What We Do?</h3>
                <p>If healthcare is on your mind then we are the people to contact. We provide end to end solutions across the healthcare spectrum. From formulating strategies in the healthcare sector to assisting the set up of entire healthcare facilities and operations management, we do it all.</p>
            </div>
            <div>
                <h3>Our Goal</h3>
                <p><span className="me-3">{checkSq}</span> To establish a referral Diagnostic and Medical Services Centre</p>
            </div>
            <div>
                <h3>Our Objectives</h3>
                <p><span className="me-3">{checkSq}</span> To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</p>
                <p><span className="me-3">{checkSq}</span> Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</p>
                <p><span className="me-3">{checkSq}</span> To promote Health Education and Medical Services.</p>
                <p><span className="me-3">{checkSq}</span> Day care Centre for follow-up cardiac renal and oncology patients.</p>
                <p><span className="me-3">{checkSq}</span> To build a full fledged specialized (Tertiary) Hospital.</p>
                <p><span className="me-3">{checkSq}</span> Set up Satellite collection Centre.</p>
            </div>
            <div>
                <h3>Our Team</h3>
                <p>At Revive Plus, we work as a team. To continue, growing as a team we look for individuals who are highly talented and motivated who can ensure the best customer service and consultancy. Apart from education and practical experience our consultants excel in high energy and responsibility. Our team of healthcare consultants include business managers, clinicians, engineers, architects, human resource experts, bio-medical specialists and hospital administrators who come together to make each project a success in the true sense.</p>
            </div>
        </div>
    );
};

export default About;