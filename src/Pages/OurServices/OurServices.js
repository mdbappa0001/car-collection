import React from 'react';
import './OurServices.css';

const OurServices = () => {
    return (
        <div  className='ourService'>
            <h2 className='serviceHeading'>Our Services</h2>
            <div className='serviceName'>
                <ul className='first'>
                    <li>Oil/oil filter changed</li>
                    <li> Wiper blades replacement</li>
                    <li> Replace air filter</li>
                    <li>Scheduled maintenance</li>
                    <li> New tires</li>
                </ul>
                <ul className='second'>
                    <li>Battery replacement</li>
                    <li>Brake work</li>
                    <li>Antifreeze added</li>
                    <li>Engine tune-up</li>
                    <li>Wheels aligned/balanced</li>
                </ul>
            </div>
        </div>
    );
};

export default OurServices;