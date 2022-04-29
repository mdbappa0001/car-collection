import React from 'react';
import './Inventory.css';

const Inventory = ({inventoryService}) => {
const {name, price,img, description,supplierName} = inventoryService;
    return (
        <div className='carDetail'>
            <img className='images' src={img} alt="" />
            <h1 className='name'>{name}</h1>
            <h3 className='priceName'>Price : <span className='price'>{price}</span> </h3>
            <h3 className='supplierName'>Supplier Name : <span className='supplier'>{supplierName}</span></h3>
            <h4 className='description'>{description}</h4>
        </div>
    );
};

export default Inventory;


