import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { UserContext } from '../../../App';

const AddNewService = () => {
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);
    const [service, setService] = useState([]);
    const [serviceIcon, setServiceIcon] = useState({
        name: 'Upload Icon'
    });
    const handleOnBlur = e => {
        const newService = { ...service }
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleFileChange = e => {
        let newFile = e.target.files[0];
        setServiceIcon(newFile);

    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', serviceIcon)
        formData.append('title', service.title)
        formData.append('description', service.description)
        formData.append('price', service.price)

        fetch('https://nameless-shelf-48183.herokuapp.com/new-service', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        document.getElementById('card-body').innerHTML = 'Service Added Successfully';
    }
    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>Add a Service</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>
                <Card className="m-5 dashboard-card">
                    <Card.Body id="card-body">
                        <Form className="m-3" onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formTitle">
                                        <Form.Label>Service Title</Form.Label>
                                        <Form.Control required onBlur={handleOnBlur} name="title" as="input" placeholder="Enter Title" />
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Group controlId="formPrice">
                                        <Form.Label>Starting Price</Form.Label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control required onBlur={handleOnBlur} name="price" as="input" placeholder="Enter Starting Price" />
                                        </InputGroup.Prepend>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <Form.Group controlId="formDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control required onBlur={handleOnBlur} name="description" as="textarea" placeholder="Enter Description" rows="2" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Icon</Form.Label>
                                        <div id="upload_button">
                                            <label>
                                                <input required onChange={handleFileChange} type="file" ngf-select ng-model="new_files" ngf-select="true" multiple />
                                                <span class="btn btn-primary file-upload-button "><FontAwesomeIcon icon={faCloudUploadAlt} />{`  ${serviceIcon.name}`}</span>
                                            </label>
                                        </div>

                                    </Form.Group>

                                </Col>
                            </Row>

                            <Button variant="primary" className="green-button" type="submit">
                                Submit
                        </Button>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default AddNewService;