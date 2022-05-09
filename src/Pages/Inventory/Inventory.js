import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventoryService }) => {
    const {_id, name, price, img, description, supplierName, quantity } = inventoryService;

    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
        navigate(`/inventoryDetails/${id}`);
    }
    return (
        <div className='carDetail'>
            <img className='images' src={img} alt="" />
            <h1 className='name'>{name}</h1>
            <h3 className='priceName'>Quantity : <span className='price'>{quantity}</span></h3>
            <h3 className='priceName'>Price : <span className='price'>{price}</span> </h3>
            <h3 className='supplierName'>Supplier Name : <span className='supplier'>{supplierName}</span></h3>
            <h4 className='description'>{description}</h4>
            <button onClick={()=> navigateToInventoryDetail(_id)} className='update'> Update </button>
        </div>
    );
};

export default Inventory;


