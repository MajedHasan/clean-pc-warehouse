import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddItem = () => {

    const [user] = useAuthState(auth)
    const [supplierName, setSupplierName] = useState('')

    useEffect(() => {
        if (user) {
            setSupplierName(user?.displayName)
        }
    }, [user])

    const handleSupplierName = event => {
        const newName = event.target.value
        setSupplierName(newName)
    }

    const handleAddItem = async event => {
        event.preventDefault()
        const itemName = event.target.name.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const supplierName = event.target.suppliername.value
        const img = event.target.image.value
        const description = event.target.description.value
        const email = user?.email

        const newItem = { itemName, price, quantity, supplierName, img, description, email }

        const url = `https://secure-stream-89996.herokuapp.com/inventory`
        const response = await axios.post(url, newItem)
        console.log(response)
        if (!response) {
            toast(`${response}`)
        }
        if (response) {
            event.target.reset()
            toast(`Item Added successfully with inserted ID: ${response?.data?.insertedId}`)
        }

    }

    return (
        <>
            <section className="add-item-section my-5 mx-auto" style={{ maxWidth: "500px", width: "100%" }}>
                <div className="add-item-wrapper p-4 shadow-lg rounded">
                    <h2 className="text-center mb-4">Please add new item</h2>
                    <form onSubmit={handleAddItem}>
                        <input type="text" name='name' placeholder='Item Name' className="form-control mb-3" />
                        <input type="number" name='price' placeholder='Price' className="form-control mb-3" />
                        <input type="number" name='quantity' placeholder='Quantity' className="form-control mb-3" />
                        <input type="text" name='suppliername' onChange={handleSupplierName} value={supplierName} placeholder='Supplier Name' className="form-control mb-3" />
                        <input type="text" name='image' placeholder='Image URL' className="form-control mb-3" />
                        <textarea name="description" className="form-control mb-4" placeholder='Description'></textarea>
                        <input type="submit" value="Add Item" className="btn btn-info text-white d-block mx-auto" />
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddItem;