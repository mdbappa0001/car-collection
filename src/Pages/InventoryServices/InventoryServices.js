import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './InventoryServices.css';

const InventoryServices = () => {
    const [inventoryServices, setInventoryServices] = useState([]);

    useEffect(() => {
        fetch('https://arcane-peak-37346.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setInventoryServices(data))
    }, [])

    return (
        <div>
            <h2 className='heading'>Car Show</h2>
            <div className='inventory-container'>
                {
                    inventoryServices.slice(0, 3).map(inventoryService => <Inventory
                        key={inventoryService._id}
                        inventoryService={inventoryService}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default InventoryServices;