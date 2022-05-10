import React, { useContext, useEffect } from 'react';
import { InventoryContext } from '../../App';
import ManageInventoryCard from '../ManageInventoryCard/ManageInventoryCard';

const ManageInventory = () => {
    const [inventoryServices, setInventoryServices] = useContext(InventoryContext);

useEffect (()=>{
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setInventoryServices(data))
},[setInventoryServices])

    return (
        <div>
            {
                inventoryServices.map(inventoryService => <ManageInventoryCard
                key={inventoryService._id}
                inventoryService = {inventoryService}
                ></ManageInventoryCard>)
            }
        </div>
    );
};

export default ManageInventory;