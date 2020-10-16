import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const NewOrder = () => {
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);

    // Getting Service Details
    const { serviceId } = useParams();
    const [order, setOrder] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        details: '',
        status: 'pending'
    });

    const [eventReg, setEventReg] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => data.find(e => e._id === serviceId))
            .then(data => setEventReg(data))
    }, [])

    //Removing & reassigning ID from the Events Collections
    const newEventDetails = { ...eventReg }
    delete newEventDetails._id;
    newEventDetails.eventId = eventReg._id;




    const handleOnBlur = e => {
        const newOrder = { ...order }
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = { ...order, ...newEventDetails };
        // console.log(formData);
        fetch('https://nameless-shelf-48183.herokuapp.com/new-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => {
                console.error(error)
            })
        document.getElementById("new-order-form").innerHTML = "Your Order Has Been Placed Successfully ! All our Orders can Be found at the All Service Menu.</p>";
    }
    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>Place an Order</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>
                <Form className="m-5 " id="new-order-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4} xs={12}>
                            <Form.Group controlId="formName">

                                <Form.Control required onBlur={handleOnBlur} name="title" as="input" Value={loggedInUser.name} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">

                                <Form.Control required onBlur={handleOnBlur} name="email" as="input" Value={loggedInUser.email} />
                            </Form.Group>
                            <Form.Group controlId="formService">


                                <Form.Control required onBlur={handleOnBlur} name="service" as="input" Value={eventReg.title} />

                            </Form.Group>

                            <Form.Group controlId="formDescription">

                                <Form.Control required onBlur={handleOnBlur} name="details" as="textarea" placeholder="Enter Description" rows="2" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} xs={12}>

                            <Form.Group controlId="formPrice">

                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>

                                    <Form.Control required onBlur={handleOnBlur} name="price" as="input" Value={eventReg.price} />


                                </InputGroup.Prepend>
                            </Form.Group>

                        </Col>
                        <Col md={2} xs={12} >
                            <Form.Group>

                                <div id="upload_button">
                                    <label>
                                        <input type="file" ngf-select ng-model="new_files" ngf-select="true" multiple />
                                        <span class="btn btn-primary file-upload-button "><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Project File</span>
                                    </label>
                                </div>

                            </Form.Group>

                        </Col>
                    </Row>

                    <Button variant="primary" className="black-button" type="submit">
                        Submit
                        </Button>



                </Form>
            </div>
        </div>

    );
};

export default NewOrder;