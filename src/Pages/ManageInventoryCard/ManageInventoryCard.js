import React from 'react';
import { Link } from 'react-router-dom';
import './ManageInventoryCard.css';

const ManageInventoryCard = ({ inventoryService, setInventoryServices }) => {
    const { name, price, img, description, supplierName, quantity } = inventoryService;

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    const remaining = inventoryService.filter(inventoryService => inventoryService._id !== id)
                    setInventoryServices(remaining);
                })
        }
    }

    return (
        <div className='carDetail'>
            <img className='images' src={img} alt="" />
            <h1 className='name'>{name}</h1>
            <h3 className='priceName'>Quantity : <span className='price'>{quantity}</span></h3>
            <h3 className='priceName'>Price : <span className='price'>{price}</span> </h3>
            <h3 className='supplierName'>Supplier Name : <span className='supplier'>{supplierName}</span></h3>
            <h4 className='description'>{description}</h4>
            <button onClick={() => handleDelete(inventoryService._id)} className='delete'> Delete </button>
            <button className='addItem'>
                <Link to='/addInventory'>Add New Item </Link>
            </button>
        </div>
    );
};

export default ManageInventoryCard;