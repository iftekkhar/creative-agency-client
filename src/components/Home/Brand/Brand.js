import React from 'react';
import './Brand.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Airbnb from '../../../images/logos/airbnb.png'
import Google from '../../../images/logos/google.png'
import Netflix from '../../../images/logos/netflix.png'
import Slack from '../../../images/logos/slack.png'
import Uber from '../../../images/logos/uber.png'

const Brand = () => {
    return (
        <section className='brand-section'>
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={2} xs={2}>
                        <Image src={Slack} fluid width={140} />
                    </Col>
                    <Col sm={2} xs={2} >
                        <Image src={Google} fluid width={129} />
                    </Col>
                    <Col sm={2} xs={2} >
                        <Image src={Uber} fluid width={99} />
                    </Col>
                    <Col sm={2} xs={2} >
                        <Image src={Netflix} fluid width={120} />
                    </Col>
                    <Col sm={2} xs={2} >
                        <Image src={Airbnb} fluid width={161} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Brand;