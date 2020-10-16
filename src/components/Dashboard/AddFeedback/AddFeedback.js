import React, { useContext, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { UserContext } from '../../../App';

const AddFeedback = () => {

    const [loggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        userImg: loggedInUser.img,
        designation: '',
        description: ''
    });
    console.log(loggedInUser);

    const handleOnBlur = e => {
        const newReview = { ...review }
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = { ...review };
        // console.log(formData);
        fetch('https://nameless-shelf-48183.herokuapp.com/new-feedback', {
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
        document.getElementById("reviewform").innerHTML = `<p>Your Review Has Been Added ! Thank You for Using Our Service</p>`;
    }


    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>Add a Review</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>
                <Form className="m-5 " id="reviewform" onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4} xs={12}>
                            <Form.Group controlId="formName">

                                <Form.Control required onBlur={handleOnBlur} name="name" as="input" Value={loggedInUser.name} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">

                                <Form.Control required onBlur={handleOnBlur} name="email" as="input" Value={loggedInUser.email} />
                            </Form.Group>
                            <Form.Group controlId="formService">

                                <Form.Control required onBlur={handleOnBlur} name="designation" as="input" placeholder="Company / Designation" />
                            </Form.Group>

                            <Form.Group controlId="formDescription">

                                <Form.Control required onBlur={handleOnBlur} name="description" as="textarea" placeholder="Enter Description" rows="2" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" className="green-button" type="submit">
                        Submit
                        </Button>

                </Form>
            </div>
        </div>
    );
};

export default AddFeedback;