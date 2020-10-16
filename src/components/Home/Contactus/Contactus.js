import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contactus.css'

const Contactus = () => {
    return (
        <section className="contact-section" id="contact">
            <Container >
                <Row className="justify-content-between contact-box">
                    <Col md={5} xs={12}>
                        <h2 className="contact-title">Let us handle your project, professionally.</h2>
                        <p className="pt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form className="" >

                            <Form.Group controlId="formEmail" >

                                <Form.Control className="contact-us" size="lg" required name="email" as="input" placeholder="Yor Email Address" />
                            </Form.Group>
                            <Form.Group controlId="formName" >

                                <Form.Control className="contact-us" size="lg" required name="name" as="input" placeholder="Your Name / Company Name" />
                            </Form.Group>



                            <Form.Group controlId="formDescription">

                                <Form.Control size="lg" required name="description" as="textarea" placeholder="You Message" rows="10" />
                            </Form.Group>


                            <Button variant="primary" className="black-button-lg" type="submit">
                                Submit
                        </Button>

                        </Form>
                    </Col>
                </Row>
                <Row className="copyright">
                    <Col>
                        <p className="text-center">Copyright Orange Labs 2020 | Developed by Iftekhar Anam</p>
                    </Col>

                </Row>
            </Container>

        </section>
    );
};

export default Contactus;