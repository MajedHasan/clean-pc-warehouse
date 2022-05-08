import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetail = () => {

    const [inventory, setInventory] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventory(data)
                console.log(data)
            })
    }, [id])


    const { itemName, price, quantity, supplierName, img, description } = inventory
    const [itemQuantity, setItemQuantity] = useState('')
    useEffect(() => {
        setItemQuantity(quantity)
    }, [quantity])


    const handleQuantity = () => {
        if (itemQuantity > 0) {
            const newQuantity = itemQuantity - 1

            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItemQuantity(newQuantity)
                    toast("Item Delivered Successfully")
                })
        }
        else {
            toast("Sorry Item is not available")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const inputQuantity = parseInt(event.target.quantity.value)
        if (inputQuantity > 0) {

            const newQuantity = parseInt(itemQuantity) + inputQuantity

            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItemQuantity(newQuantity)
                    toast(`${inputQuantity} New Quantity Added`)
                    event.target.reset()
                })
        }
        else {
            toast("Please enter positive Number")
        }
    }

    return (
        <section className="inventory-details-wrapper my-5">
            <div className="container">
                <h1 className="text-center">Item Detail</h1>
                <div className="row g-5">
                    <div className="col-md-6 col-12 p-3">
                        <div className="shadow-lg rounded p-4">
                            <img src={img} alt="" className='img-fluid' />
                            <h2 className='text-info'>Name: {itemName}</h2>
                            <h2 className='text-warning'>Price: ${price}</h2>
                            <p className='pb-0'>Quantity: {itemQuantity}</p>
                            <p>Supplier name: <strong>{supplierName}</strong></p>
                            <p className='bg-dark text-white p-3 rounded'>{description}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <div className="shadow-lg rounded p-4 text-center">
                            <h2 className='text-center'>Manage Item</h2>
                            <button className='btn btn-success mt-5' onClick={handleQuantity}>Deliver the item</button>
                            <form className='mt-5' onSubmit={handleSubmit}>
                                <input type="number" name='quantity' className="form-control mb-2" placeholder='Quantity' />
                                <button className='btn btn-warning text-white'>Add Quantity</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InventoryDetail;