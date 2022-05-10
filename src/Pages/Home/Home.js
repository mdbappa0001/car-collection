import React from 'react';
import CarService from '../CarService/CarService';
import InventoryServices from '../InventoryServices/InventoryServices';
import OurServices from '../OurServices/OurServices';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryServices></InventoryServices>
            <CarService></CarService>
            <OurServices></OurServices>
        </>
    );
};

export default Home;