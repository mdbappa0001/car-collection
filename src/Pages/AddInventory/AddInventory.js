import React from 'react';
import { useForm } from "react-hook-form";
import './AddInventory.css';


const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }


    return (
        <div className='addContainer'>

            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input className='input' placeholder='Name' {...register("firstName", { required: true, maxLength: 20 })} />
                <input className='input' placeholder='PhotoURL' {...register("PhotoURL")} />
                <input className='input' placeholder='Price' type="number" {...register("price")} />
                <input className='input' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='input' placeholder='SupplierName' type="text" {...register("supplierName")} />
                <input className='bg-blue-500 hover:bg-blue-700 text-white rounded-full my-3 py-2 ' type="submit" />
            </form>
        </div>
    );
};

export default AddInventory;