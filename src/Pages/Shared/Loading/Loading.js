import React from 'react';

const Loading = () => {
    return (
        <div className='p-4 rounded shadow-lg my-5 text-center mx-auto' style={{ maxWidth: "500px", width: "100%" }}>
            <h2>Loading...</h2>
            <div className='d-flex align-items center justify-content-center'>
                <div class="spinner-border me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;