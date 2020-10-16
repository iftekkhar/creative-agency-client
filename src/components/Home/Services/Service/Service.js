import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './Service.css';
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const price = `${service.price}`;
    return (
        <Col md={4} sm={12}>

            <Link to={"/dashboard/order/" + service._id}>

                <Card className="text-center service-card">
                    <div className="animate" data-hover={price}>
                        <div>
                            <Card.Img variant="top" src={`data:image/jpeg;base64,${service.dbImage.img}`} width={30} />

                            <Card.Body>
                                <Card.Title className="single-service-title">{service.title}</Card.Title>
                                <Card.Text className="single-service-description">
                                    {service.description}
                                </Card.Text>


                            </Card.Body>
                        </div>
                    </div>
                </Card>

            </Link>
        </Col >
    );
};

export default Service;