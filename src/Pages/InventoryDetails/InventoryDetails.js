import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryDetailsId} = useParams();
    return (
        <div>
            <h2>This is inventorydetails: {inventoryDetailsId}</h2>
        </div>
    );
};

export default InventoryDetails;
