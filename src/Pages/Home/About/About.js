import React from 'react';
import aboutImg from '../../../images/home-page-banner.jpg'

const About = () => {
    return (
        <section className="about-us-section my-5 py-3">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-12">
                        <h2 className='text-uppercase'>About <span className='text-info'>C</span>lean <span className='text-info'>Pc</span> House</h2>
                        <p>We are Stocking Best quality Laptop for all of our customer. We are collecting brand new/ second hand laptop from Different countries (Dubai, USA, UAE, etc). We Guarantee you that you can get your best quality laptop from us. So why you are waiting for. Just start managing your inventory using our system.</p>
                        <p>Hurry! We have offer for you for limited time. If you want to manage your stock using our system. we are giving you free 30 days and 100% money back guarantee.</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={aboutImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;