import React from 'react';
import Testimonials from '../../Testimonials';
import Banner from './Banner';
import Catagories from './Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;