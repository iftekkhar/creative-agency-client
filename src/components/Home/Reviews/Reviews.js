import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Review from './Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/all-feedbacks')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section >
            <Container>
                <h2 className='review-title text-center'>Clients <span>Feedback</span></h2>
                <Row className="justify-content-center review-box">
                    {reviews.length === 0 && <Spinner animation="grow" variant="warning" />
                    }
                    {reviews.map(review => <Review review={review} key={review._id}></Review>)}

                </Row>
            </Container>
        </section>
    );
};

export default Reviews;