import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, itemName, price, quantity, supplierName, img, description } = inventory
    return (
        <div className="col">
            <div className="shadow-lg p-3 rounded">
                <img src={img} alt="" className='img-fluid mb-4' style={{ border: "4px solid #F1F1F1", borderRadius: "7px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.4)" }} />
                <div className="info-box text-center">
                    <h2 className='name text-info'>Name: {itemName}</h2>
                    <h4 className='price text-warning'>Price: ${price}</h4>
                    <p className='mb-0'><small>Quantity: {quantity}</small></p>
                    <h6 className='mb-3'>Supplier Name: {supplierName}</h6>
                    <p className='description'>{description}</p>
                    <Link to={`/inventory/${_id}`} className="btn btn-info text-white">Manage</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;