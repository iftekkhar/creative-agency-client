import { faComment, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);
    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/isAdmin?email=' + loggedInUser.email, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar py-4" style={{ height: "100%" }}>
            <Navbar expand="lg" style={{ padding: 0 }} className="nav-flex">

                <Navbar.Brand href="/"><Image src={Logo} fluid width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column  py-4 dashboard-sidebar">
                        {isAdmin ?
                            <>
                                <Link to="/dashboard/all-services">
                                    <FontAwesomeIcon icon={faHdd} />Order List
                                </Link>
                                <Link to="/dashboard/admin/add-service">
                                    <FontAwesomeIcon icon={faPlus} />Add Service
                                </Link>
                                <Link to="/dashboard/admin/add-admin">
                                    <FontAwesomeIcon icon={faUserPlus} />Add Admin
                                </Link>
                            </>
                            :
                            <>
                                {/* <Link to="/dashboard/order/New">
                                <FontAwesomeIcon icon={faShoppingCart} /> Order Service
                            </Link> */}
                                <Link to="/dashboard/all-services">
                                    <FontAwesomeIcon icon={faHdd} />All Orders
                                </Link>

                                <Link to="/dashboard/add-feedback">
                                    <FontAwesomeIcon icon={faComment} />Review
                                </Link>
                            </>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;