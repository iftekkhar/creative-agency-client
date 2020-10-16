
import React, { useContext } from 'react';
import * as firebase from 'firebase';
import './Auth.css'
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Row, Card, Button, Navbar, Image } from 'react-bootstrap';
import GoogleIcon from '../../images/google.png';
import Logo from '../../images/logos/logo.png'

const Auth = () => {

    //LoggedIn User State
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //Forced Redirect
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    //Initialize Firebase
    const initFireBase = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    //Google Login
    const handleGoogleSignIn = () => {
        initFireBase();

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {

                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch(function (error) {


            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                // ...
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <Container fluid >
            <Row className="login justify-content-md-center">
                <Navbar expand="lg" style={{ padding: 0 }}>
                    <Navbar.Brand href="/"><Image src={Logo} fluid width={150} /></Navbar.Brand>
                </Navbar>
            </Row>
            <Row className="auth-section justify-content-md-center">
                <Col xl={4} lg={6} md={10} sm={12} xs={12} >
                    <Card className="login-section text-center">
                        <h5>Login With</h5>
                        <div className="social-login-section">

                            <Button
                                variant="outline-primary"
                                className="outlined-social-button social-login"
                                onClick={handleGoogleSignIn}
                            >
                                <img src={GoogleIcon} alt="google-icon" width="30px" />  Continue with Google
              </Button>
                        </div>
                        <div className="create-account">
                            Don't have an Account ? <a href="#login" >Create an Account </a>
                        </div>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
};

export default Auth;