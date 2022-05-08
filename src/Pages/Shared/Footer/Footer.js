import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    return (
        <footer className='bg-dark py-4'>
            <div className="container">
                <div className="row row-cols-md-3 row-cols-12 g-4 text-white">
                    <div className="col">
                        <h3 className='mb-3'>Clean PC Warehouse</h3>
                        <p>
                            Clear pc warehouse is the best warehouse/inventory platform where you can add your products, deliver, manage and delete product.
                        </p>
                    </div>
                    <div className="col text-center">
                        <h4 className='mb-3'>Important Links</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/inventory'>Inventory</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center">
                        <h4 className="mb-3">Contact Us</h4>
                        <p><a href='mailto:example@gmail.com'>example@gmail.com</a></p>
                        <p><a href='tell:+88016777xxx'>+88016777xxx</a></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </footer>
    );
};

export default Footer;