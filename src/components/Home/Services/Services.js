import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="service-section">
            <Container>
                <h2 className='service-title text-center'>Provide Awesome <span>Services</span></h2>
                <Row className="justify-content-center service-box">
                    {services.length === 0 && <Spinner animation="grow" variant="success" />
                    }

                    {services.map(service => <Service service={service} key={service._id}></Service>)}

                </Row>
            </Container>
        </section>
    );
};

export default Services;