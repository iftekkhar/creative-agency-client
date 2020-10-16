import React from 'react';
import Brand from './Brand/Brand';
import Contactus from './Contactus/Contactus';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Brand></Brand>
            <Services></Services>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Contactus></Contactus>
        </>
    );
};

export default Home;