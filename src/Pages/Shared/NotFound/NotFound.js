import React from 'react';
import './NotFound.css';
import notFound from '../../../images/banner/notFound.png';

const NotFound = () => {
    return (
        <div>
           <img className='notFound' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;