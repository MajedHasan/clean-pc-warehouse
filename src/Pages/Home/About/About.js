import React from 'react';
import aboutImg from '../../../images/home-page-banner.jpg'

const About = () => {
    return (
        <section className="about-us-section my-5 py-3">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-12">
                        <h2 className='text-uppercase'>About <span className='text-info'>C</span>lean <span className='text-info'>Pc</span> House</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam, totam nisi excepturi incidunt est possimus ratione impedit architecto ullam eos veritatis nesciunt voluptatem quas delectus distinctio reprehenderit, voluptatibus omnis!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam, totam nisi excepturi incidunt est possimus ratione impedit architecto ullam eos veritatis nesciunt voluptatem quas delectus distinctio reprehenderit, voluptatibus omnis!</p>
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