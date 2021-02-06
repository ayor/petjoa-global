import React from 'react';
import { NavLink } from 'react-router-dom';
import Vision from '../../assets/pexels-fauxels-3184430.jpg';
import Goal from '../../assets/pexels-pixabay-265087.jpg';
import Goals from '../../assets/pexels-skitterphoto-15812.jpg';
import mission from '../../assets/pexels-pixabay-415071.jpg';

const Mission = props => (
    <React.Fragment>
        <div className="row">
            <div className="col">
                <p className="display-4 text-muted text-center font-weight-bold m-3 pt-3">Our Misson</p>
<hr/>
                <div className="row justify-content-center text-center p-3 mt-5">

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-3 mb-5 col-xl-3">
                        <div className="card mx-auto" >
                            <img src={Vision} loading="lazy" className="card-img-top"  alt="about us" />
                            <div className="card-body" >
                                <h3 className="h4 text-capitalize text-muted">vision</h3>
                                <p className=" card-text"> We exceed our customers expectations in our commitment to their financial success. </p>
                                <NavLink to='/about' className="text-success font-weight-bold">Read More</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" col-12 col-md-6 col-lg-3 mb-5 col-xl-3">
                        <div className="card mx-auto" >
                            <img src={Goal} loading="lazy" className="card-img-top"  alt="about us" />
                            <div className="card-body" >
                                <h3 className="h4 text-capitalize text-muted">mission</h3>
                                <p className=" card-text"> PGIL is a dynamic full-service financial institution, operating safely and profitably.</p>
                                <NavLink to="/about" className="text-success font-weight-bold">Read More</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" col-12 col-md-6 col-lg-3 mb-5 col-xl-3">
                        <div className="card mx-auto" >
                            <img src={mission} loading="lazy" className="card-img-top"  alt="about us" />
                            <div className="card-body" >
                                <h3 className="h4 text-capitalize text-muted">promise</h3>
                                <p className=" card-text"> We will strengthen these relationship  providing the right solution.</p>
                                <NavLink to="/about" className="text-success font-weight-bold">Read More</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" col-12 col-md-6 col-lg-3 mb-5 col-xl-3">
                        <div className="card mx-auto" >
                            <img src={Goals} loading="lazy" className="card-img-top"  alt="about us" />
                            <div className="card-body" >
                                <h3 className="h4 text-capitalize text-muted">goals</h3>
                                <p className=" card-text">PGIL  goal is to create customer  loyalty , shareholder value  and...</p>
                                <NavLink to="/about" className="text-success">Read More</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Mission;