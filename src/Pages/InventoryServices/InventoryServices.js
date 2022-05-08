import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './InventoryServices.css';

const InventoryServices = () => {
    const [inventoryServices , setInventoryServices] = useState([]);

useEffect( () =>{
    fetch('collection.json')
    .then(res => res.json())
    .then(data => setInventoryServices(data))
} , [])

    return (
        <div>
            <h2>This is inventory services</h2>
        <div className='inventory-container'>
        {
                inventoryServices.slice(0,6).map(inventoryService => <Inventory 
                key = {inventoryService.id}
                inventoryService={inventoryService}
                ></Inventory>)
            }
        </div>
        </div>
    );
};

export default InventoryServices;