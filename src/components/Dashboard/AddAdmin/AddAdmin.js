import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);
    const [addAdmin, setAddAdmin] = useState({});
    const handleOnBlur = e => {
        const newAdmin = { ...addAdmin }
        newAdmin[e.target.name] = e.target.value;
        setAddAdmin(newAdmin);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = { ...addAdmin };
        // console.log(formData);
        fetch('https://nameless-shelf-48183.herokuapp.com/add-admin', {
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
        document.getElementById("add-admin-form").innerHTML = `<p>New Admin Added.</p>`;
    }
    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>Add an Admin</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>
                <Form className="m-5 " id="add-admin-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4} xs={12}>
                            <Form.Group controlId="formEmail">

                                <Form.Control required onBlur={handleOnBlur} name="email" as="input" placeholder="Enter an Email" />
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

export default AddAdmin;