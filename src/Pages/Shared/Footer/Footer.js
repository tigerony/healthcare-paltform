import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {

    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <Row xs={1} md={2} lg={4}>
                    <Col>
                        <p>Why Us</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia dolores possimus dolorum, fugiat ipsam recusandae maxime excepturi dolore tenetur nesciunt sed odio illo facere quis veritatis voluptate? Deserunt ad beatae vero perferendis error quia ullam eius repellat nihil? Debitis, consequuntur.</p>
                    </Col>
                    <Col>
                        <p>Social</p>
                        <Nav.Link href="">Facebook</Nav.Link>
                        <Nav.Link href="">Instagram</Nav.Link>
                        <Nav.Link href="">Twitter</Nav.Link>
                    </Col>
                    <Col>
                        <p>More</p>
                        <Nav.Link href="">About Us</Nav.Link>
                        <Nav.Link href="">Find Us</Nav.Link>
                        <Nav.Link href="">Contact Us</Nav.Link>
                        <Nav.Link href="">Blog</Nav.Link>
                    </Col>
                    <Col>
                        <p>About Us</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis sapiente molestiae, aspernatur vel quis nostrum accusantium nam, dolore deserunt quam blanditiis officia error perferendis repellendus odit sed omnis sit?</p>
                    </Col>
                </Row>
                <div className="text-center my-5">
                    <p><small>Copyright 2021, Revive Plus</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;