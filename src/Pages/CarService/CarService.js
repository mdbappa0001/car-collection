import React from 'react';
import './CarService.css';
import servicingCenter from '../../images/banner/servicingCenter.jpg';

const CarService = () => {
    return (
        <div className='carServiceContainer'>
            <div>
            <img className='carImage' src={servicingCenter} alt="" />
            </div>
            <div className='description'>
                <h1 className='carHeading'>Welcome To Our Servicing Center</h1>
                <p className='carDescription'>Enjoy Technology That Makes You Feel More Connected, Confident, And Excited. Drive A Nissan Car So Advanced, You'll Feel Like You're Driving The Future. Exhilarating Power. Automated Breaking. Advanced Safety. Leading Technology. Remote Start. Dynamic Design. Models: Rogue, Altima, Sentra.</p>
            </div>
        </div>
    );
};

export default CarService;