import React from 'react';
import InventoryServices from '../InventoryServices/InventoryServices';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryServices></InventoryServices>
        </>
    );
};

export default Home;