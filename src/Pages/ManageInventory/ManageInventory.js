import React, { useContext, useEffect } from 'react';
import { InventoryContext } from '../../App';
import ManageInventoryCard from '../ManageInventoryCard/ManageInventoryCard';

const ManageInventory = () => {
    const [inventoryServices, setInventoryServices] = useContext(InventoryContext);

    useEffect(() => {
        fetch('https://arcane-peak-37346.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setInventoryServices(data))
    }, [setInventoryServices])

    return (
        <div className='inventory-container'>
            {
                inventoryServices.map(inventoryService =>
                    <ManageInventoryCard
                        key={inventoryService._id}
                        inventoryService={inventoryService}
                        setInventoryServices={setInventoryServices}
                    ></ManageInventoryCard>)
            }
        </div>
    );
};

export default ManageInventory;