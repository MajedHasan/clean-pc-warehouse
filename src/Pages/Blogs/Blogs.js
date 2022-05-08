import React from 'react';

const Blogs = () => {
    return (
        <section className="blog-section my-5">
            <div className="container">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Difference between javascript and nodejs?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Javascript is a programming language that is used for writing scripts on the website. Whereas Node.js is an running environment for JavaScript, which holds a lot of requiring libraries. Javascript can only be run in the browsers. One the others hand, We can run Javascript outside the browser with the help of NodeJS.	Javascript  is basically used on the client-side. NodeJS is mostly used on the server-side.Javascript is used in frontend development.	Nodejs is used in server-side development.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                When should you use nodejs and when should you use mongodb
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Node JS for the front end as well as for back-end development. Developers can write real-time applications, and at the same time, it provides scope for mobile application development.Nodejs Best suited for small size projects.Highly useful when a scalable and faster application is required.Developers can utilize it on the client and server-side.More suited for an application like real-time collaborative drawing/edit like Google Docs.
                                MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other.MongoDB is trying to incorporate many datasets. Its schemaless design allows for flexibility in how store data.MongoDB is a great database for integrating geospatial data with other types of data. MongoDB is a powerful database with many capabilities.MongoDB also offers a free, open-source version, which is an excellent option for teams on a budget who can stand up a database server on-premises or in the cloud
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Differences between sql and nosql databases?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                SQL or Structured query language. And NoSQL No declarative query language SQL databases are relational,  databases are non-relational. SQL databases have fixed or static or predefined schema. NoSQL  have dynamic schema.SQL databases are not suited for hierarchical data storage. NoSQL databases are best suited for hierarchical data storage.SQL databases are vertically scalable while NoSQL databases are horizontally scalable.Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is the purpose of jwt and how does it work?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties fast  client and second  server. It can be used as a data format by any programming language.Instead of storing information on the server after authentication, JWT creates a JSON web token and encodes, sterilizes, and adds a signature with a secret key that cannot be tampered with. This key is then sent back to the browser. Each time a request is sent, it verifies and sends the response back.when the user successfully logs in using their credentials, a JSON Web Token will be returned.Whenever the user wants to access a protected route or resource.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;