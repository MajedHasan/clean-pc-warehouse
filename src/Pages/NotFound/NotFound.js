import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found-section my-5">
            <div className="container">
                <div className="p-5 shadow rounded text-center">
                    <h2 className='text-danger'>Sorry, You are in wrong Link</h2>
                    <Link to='/' className='text-success'>Go to home page</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;