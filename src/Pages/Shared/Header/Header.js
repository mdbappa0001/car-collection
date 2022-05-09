import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Home/CustomLink/CustomLink';



const Header = () => {
    return (
        <div className='sticky top-0 bg-gray-900 px-12 py-8 flex justify-center md:justify-between '>

        <div className='hidden md:block'><Link to='/' className='font-sans font-bold text-3xl  text-yellow-300'> 
        Car Collection
        </Link></div>

        <div className=' flex gap-8 text-xl font-bold'>
            <CustomLink to='/'>HOME</CustomLink>
            {/* <CustomLink to='/inventoryDetails'>InventoryDetails</CustomLink> */}
            <CustomLink to='/blog'>BLOG</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
        </div>

    </div>
    );
};

export default Header;