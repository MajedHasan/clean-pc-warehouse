import React from 'react';
import Inventory from '../../Inventory/Inventory/Inventory';
import useInventory from '../../../hooks/useInventory';
import Loading from '../../Shared/Loading/Loading';

const Inventories = () => {

    const [inventories, setInventories] = useInventory()

    if (!inventories) {
        return <Loading></Loading>
    }

    return (
        <section className='inventory-section my-5 py-3' id='inventory'>
            <h2 className="text-center mb-3"><span className="text-info">O</span>ur <span className="text-info">P</span>roducts</h2>
            <div className="container">
                <div className="inventory-wrap row row-cols-md-3 row-cols-12 g-4">
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Inventories;