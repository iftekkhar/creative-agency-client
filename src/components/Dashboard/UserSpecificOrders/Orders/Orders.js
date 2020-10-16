import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Orders = ({ order }) => {
    return (
        <Col lg={4} md={6} sm={12}>

            <Card className="text-left service-card mb-3">
                <div className="service-head">
                    <div><Card.Img variant="top" src={`data:image/jpeg;base64,${order.dbImage.img}`} width={30} /></div>
                    <Card.Text className="status">
                        {order.status}
                    </Card.Text>
                </div>
                <Card.Body>
                    <Card.Title>{order.title}</Card.Title>
                    <Card.Text>
                        {order.details}
                    </Card.Text>

                </Card.Body>
            </Card>

        </Col>
    );
};

export default Orders;