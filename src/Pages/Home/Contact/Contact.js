import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section my-5 py-3">
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <div className="row g-5">
                    <div className="col-md-6 col-12 p-3">
                        <h4>Please filup the form to contact us</h4>
                        <input type="text" placeholder='Name' className='form-control mb-3' />
                        <input type="text" placeholder='Subject' className='form-control mb-3' />
                        <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='form-control mb-3'></textarea>
                        <input type="submit" value="Send" className='btn btn-info text-white' />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117584.74940358533!2d90.78062457546878!3d22.93094283844445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754b8ae19dcb481%3A0xd51bd6a39a324fd!2sLakshmipur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1652026026379!5m2!1sen!2sbd" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Lakshmipur, Dhaka, Bangladesh'
                            className='w-100 h-100'></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;