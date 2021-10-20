import React from 'react';
import Banner from '../Banner/Banner';
import HomeDoctors from '../Main/HomeDoctors/HomeDoctors';
import HomeProducts from '../Main/HomeProducts/HomeProducts';
import HomeServices from '../Main/HomeServices/HomeServices';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <HomeDoctors></HomeDoctors>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;