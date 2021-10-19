import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors/Doctors';
import Services from '../Services/Services/Services';
import Products from '../Shop/Products/Products';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Products></Products>
        </div>
    );
};

export default Home;