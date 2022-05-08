import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageItems = () => {
    const [inventories, setInventories] = useInventory([])

    const handleDeleteItem = async id => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            const url = `https://secure-stream-89996.herokuapp.com/deleteitem/${id}`
            const deleteItem = await axios.delete(url)
            if (deleteItem) {
                const remaningItem = inventories.filter(item => item._id !== id)
                setInventories(remaningItem)
            }
        }
    }

    return (
        <section className="my-item-section my-4">
            <div className="container">
                <h2 className="text-center">Inventory Item: {inventories.length}</h2>
                <div className="row g-5">

                    {
                        inventories.map(item => <>
                            <div className="col-lg-4 col-md-6 col-12 p-3">
                                <div className="box p-3 shadow-lg rounded">
                                    <img src={item.img} alt="" className='p-2 shadow-sm img-fluid' style={{ border: '4px solid #F1F1F1', borderRadius: "6px" }} />
                                    <div className="info my-4">
                                        <h4>Name: {item.itemName}</h4>
                                        <h2 className='text-warning'>Price: ${item.price}</h2>
                                        <p className='mb-0'><small>quantity: {item.quantity}</small></p>
                                        <p><strong>Supplier Name: {item.supplierName}</strong></p>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="button-group d-flex justify-content-between">
                                        <Link className='btn btn-info text-white' to={`/inventory/${item._id}`}>Manage</Link>
                                        <button className='btn btn-danger text-white' onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default ManageItems;