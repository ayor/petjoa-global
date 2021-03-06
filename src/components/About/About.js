import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import AboutUS from '../../assets/pexels-nappy-936137.jpg';
import Services from '../../assets/pexels-fauxels-3182752.jpg';
import LoanCal from '../../assets/pexels-pixabay-53621.jpg';
import AboutUs_Classes from './AboutUs.module.css';


const About = () => {
    
    return (
        <React.Fragment>
            <div className="row" id="About" >
                <div className="col text-center ">
                    <p className="display-4 text-success font-weight-bold m-3 pt-3">About Us</p>
                    <hr />
                    <div className="row justify-content-center text-center p-3 mt-5">

                        <div className=" col-12 col-md-6 col-lg-4">
                            <div className="card mx-auto" >
                                <img src={Services} loading="lazy" className={`card-img-top ${imageClasses[0]}`} alt="about us" />
                                <div className="card-body" >
                                    <h3 className="h4 text-capitalize text-muted">know us</h3>
                                    <p className=" card-text"> <span className="font-italics font-weight-bold text-success ">PETJOA GLOBAL INVESTMENT LIMITED</span> is a thrift firm that lends money to bankers and professional bodies (salary earners) with static…</p>
                                    <NavLink to="/about" className="text-success font-weight-bold">Read More</NavLink>
                                </div>
                            </div>

                        </div>

                        <div className=" col-12 col-md-6 col-lg-4 mt-3">
                            <div className="card mx-auto" >
                                <img src={AboutUS} loading="lazy"  className={`card-img-top ${imageClasses[1]}`} alt="about us" />
                                <div className="card-body" >
                                    <h3 className="h3 text-capitalize text-muted">our services</h3>
                                    <p className=" card-text">We offer a diverse range of loan products to help business people like you build on their success.   Unlike… </p>
                                    <NavLink to="/about" className="text-success font-weight-bold">Read More</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className=" col-12 col-md-6 col-lg-4 mt-5">
                            <div className="card mx-auto" >
                                <img src={LoanCal} loading="lazy" className={`card-img-top ${imageClasses[2]}`} alt="about us" />
                                <div className="card-body" >
                                    <h3 className="h3 text-capitalize text-muted">calculate loan repayment</h3>
                                    <p className=" card-text">Calculate and plan your repayment schdedule before hand. </p>
                                    <NavLink to="/about" className="text-success font-weight-bold">Read More</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};

export default About;;