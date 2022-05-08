import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4 col-sm-6">
                        <h4 className='title'>Contact Us</h4>
                        <ul className='list-unstyled'>
                            <li>Md Bappa</li>
                            <li>Karwanbazar,Dahaka</li>
                            <li>Phone : 01521536417</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-4 col-sm-6">
                        <h4 className='title'>Connect With</h4>
                        <ul className='list-unstyled'>
                            <li>Facebook</li>
                            <li>Linkdin</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-4 col-sm-6">
                        <h4 className='title'>Best Car Collection</h4>
                        <ul className='list-unstyled'>
                            <li>Ferrari</li>
                            <li>Tesla</li>
                            <li>Lamborginii</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        <small className='right'>&copy;{new Date().getFullYear()} car collection - All Right Reserved</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;