import React from 'react';
import CarService from '../CarService/CarService';
import InventoryServices from '../InventoryServices/InventoryServices';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryServices></InventoryServices>
            <CarService></CarService>
        </>
    );
};

export default Home;