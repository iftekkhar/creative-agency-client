import React, { useContext, useEffect, useState } from 'react';
import { Col, Card, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Orders from './Orders/Orders';
import './UserSpecificOrders.css'

const UserSpecificOrders = () => {
    //LoggedIn User State
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/my-orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>Orders</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>
                <Row className="user-service-list d-flex m-5">
                    {orders.length === 0 && <Spinner animation="grow" variant="success" />
                    }
                    {orders.map(order => <Orders order={order} key={order._id}></Orders>)}
                </Row>
            </div>
        </div>
    );
};

export default UserSpecificOrders;