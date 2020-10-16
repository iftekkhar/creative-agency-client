import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import './Dashboard.css'
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import AddNewService from './AddNewService/AddNewService'
import AllServices from './AllServices/AllServices'
import NewOrder from './NewOrder/NewOrder';
import AddFeedback from './AddFeedback/AddFeedback';

import { UserContext } from '../../App';
import AddAdmin from './AddAdmin/AddAdmin';
import UserSpecificOrders from './UserSpecificOrders/UserSpecificOrders';

const Dashboard = () => {
    const location = useLocation();
    console.log(location);
    //LoggedIn User State
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);

    // const [orders, setOrders] = useState([])
    // useEffect(() => {
    //     fetch('https://nameless-shelf-48183.herokuapp.com/my-orders?email=' + loggedInUser.email, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             authorization: `Bearer ${sessionStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    return (
        <Router>
            <Container fluid>
                <Row style={{ height: "100vh" }}>
                    <Col md={2} sm={6} xs={12} className="d-flex justify-content-center sidebar-panel"  >
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md={10} sm={6} xs={12} >
                        {/* <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
                            <div class="panel-title ">
                                <h3>Dashboard</h3>
                                <p>Hello, {loggedInUser.name}</p>
                            </div>
                            <div class="dash-panel" style={{ height: '100%' }}> */}
                        <Switch>

                            <Route path="/dashboard/admin/all-services" >
                                <AllServices />
                            </Route>
                            <Route path="/dashboard/admin/add-service" >
                                <AddNewService ></AddNewService>
                            </Route>
                            <Route path="/dashboard/order/:serviceId" >
                                <NewOrder></NewOrder>
                            </Route>
                            {/* <Route path="/dashboard/order/new" >
                                        <NewOrderDefault></NewOrderDefault>
                                    </Route> */}
                            <Route path="/dashboard/add-feedback" >

                                <AddFeedback></AddFeedback>
                            </Route>
                            <Route path="/dashboard/admin/add-admin" >
                                <AddAdmin></AddAdmin>
                            </Route>

                            <Route path="/dashboard/all-services" >
                                {isAdmin ?
                                    <AllServices />
                                    :

                                    <UserSpecificOrders></UserSpecificOrders>

                                }

                            </Route>


                        </Switch>

                        {/* </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Dashboard;