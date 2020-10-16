import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';


const Review = ({ review }) => {
    return (
        <Col md={4} sm={12}>
            <div class="review-card-container">
                <Card >
                    <Card.Body className="review-card">
                        <Row className="client-details">
                            <Card.Img variant="left" src={review.userImg} />
                            <div className="client-meta "><h5 className="font-weight-bolder">{review.name}</h5>
                                <p className="font-weight-bold">{review.designation}</p></div>
                        </Row>
                        <Row className="client-description">
                            <p>{review.description}</p>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Review;