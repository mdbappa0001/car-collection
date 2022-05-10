import React from 'react';

const ManageInventoryCard = ({inventoryService}) => {
    const { name, price, img, description, supplierName, quantity } = inventoryService;
    return (
        <div className='carDetail'>
        <img className='images' src={img} alt="" />
        <h1 className='name'>{name}</h1>
        <h3 className='priceName'>Quantity : <span className='price'>{quantity}</span></h3>
        <h3 className='priceName'>Price : <span className='price'>{price}</span> </h3>
        <h3 className='supplierName'>Supplier Name : <span className='supplier'>{supplierName}</span></h3>
        <h4 className='description'>{description}</h4>
        <button className='update'> Delete </button>
    </div>
    );
};

export default ManageInventoryCard;