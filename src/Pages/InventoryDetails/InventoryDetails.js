import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetails.css';

const InventoryDetails = () => {
    const {inventoryDetailsId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/service/${inventoryDetailsId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    },[])

    return (
        <div className='carDetails'>
             <img className='images1' src={service.img} alt="" />
             <h2 className='id'>Id : {inventoryDetailsId}</h2>
            <h1 className='name1'>{service.name}</h1>
            <h3 className='priceName1'>Quantity : <span className='price'>{service.quantity}</span></h3>
            <h3 className='priceName1'>Price : <span className='price'>{service.price}</span> </h3>
            <h3 className='supplierName1'>Supplier Name : <span className='supplier'>{service.supplierName}</span></h3>
            <h4 className='description1'>{service.description}</h4>
        </div>
    );
};

export default InventoryDetails;
