import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventories from '../Inventories/Inventories';
;

const Home = () => {
    return (
        <>
            <Banner></Banner>

            <Inventories></Inventories>

            <About></About>

            <Contact></Contact>

        </>
    );
};

export default Home;