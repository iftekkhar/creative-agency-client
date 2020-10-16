import React from 'react';
import { Image, Container, Row } from 'react-bootstrap';
import './Portfolio.css';
//Import Images
import Carousel1 from '../../../images/carousel-1.png'
import Carousel2 from '../../../images/carousel-2.png'
import Carousel3 from '../../../images/carousel-5.png'
import Carousel4 from '../../../images/carousel-4.png'
import Carousel5 from '../../../images/carousel-5.png'
// import Swiper core and required components
import SwiperCore, { Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Pagination, Autoplay, A11y]);


const Portfolio = () => {

    return (
        <section className="portfolio-section" id="portfolio">
            <Container fluid>
                <h2 className="portfolio-title text-center">Here are some of <span>our works</span></h2>
                <Row className="justify-content-center portfolio-slider">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides
                        autoplay
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}

                    >
                        <SwiperSlide> <Image src={Carousel1} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel2} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel3} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel4} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel5} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel1} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel2} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel3} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel4} fluid /></SwiperSlide>
                        <SwiperSlide> <Image src={Carousel5} fluid /></SwiperSlide>

                    </Swiper>
                </Row>
            </Container>

        </section >
    );
};

export default Portfolio;