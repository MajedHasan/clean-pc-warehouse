import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-section'>
            <div className="bg-color">
                <div className="container">
                    <div className="content text-center">
                        <h2>Welcome To Clean PC Warehouse</h2>
                        <Link className='btn btn-info text-white px-5 py-2' to='/manageitems'>Manage Inventory</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;