import React from 'react';

const ManageInventoryCard = ({inventoryService}) => {
    const {name,img} = inventoryService;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            
        </div>
    );
};

export default ManageInventoryCard;