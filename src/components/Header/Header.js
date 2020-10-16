import React, { useContext } from 'react';
import './Header.css'
import { Nav, Navbar, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logos/logo.png'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);
    return (
        <Navbar expand="lg" style={{ padding: 0 }}>
            <Navbar.Brand href="/"><Image src={Logo} fluid width={150} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navigation-bar">
                    <Nav.Link href="/">Home </Nav.Link>
                    <Nav.Link href="/#portfolio">Our Portfilio</Nav.Link>
                    <Nav.Link href="/">Our Team</Nav.Link>
                    <Nav.Link href="#contact">Contact us</Nav.Link>
                    {
                        loggedInUser.email ?
                            <Link to="/dashboard/all-services" className="nav-link">
                                Dashboard
                            </Link>
                            :
                            <Link to="/dashboard/all-services" >
                                <Button variant="primary" className="black-button" type="submit">
                                    Login
                        </Button>
                            </Link>
                    }

                    {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */}
                </Nav >

            </Navbar.Collapse >
        </Navbar >


    );
};

export default Header;