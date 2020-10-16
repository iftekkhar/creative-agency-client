import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import './Hero.css';
import Frame from '../../../images/Frame.png'
import Header from '../../Header/Header';

const Hero = () => {
    return (
        <main className="hero-section">
            <Container className="hero-container">
                <Header></Header>
                <Row className="d-flex align-items-center hero">
                    <Col md={4} sm={12} className="hero-text-column">
                        <h1 className="hero-title">Let’s Grow Your Brand To The Next Level</h1>
                        <p className="dark-text mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <Button className="black-button-lg" variant="primary" >Hire Us</Button>
                    </Col>
                    <Col md={6} sm={12} className="offset-md-1 hero-image">
                        <Image src={Frame} fluid />
                    </Col>
                </Row>
            </Container>
        </main>

    );
};

export default Hero;