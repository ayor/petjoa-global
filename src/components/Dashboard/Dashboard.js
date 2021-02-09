import React from 'react';
import userPlaceHolder from '../../assets/index.png';
import { NavLink } from 'react-router-dom';
import DashboardClasses from './Dashboard.module.css'

const Dashboard = () => (<React.Fragment>
    <div className="row vh-100">
        <div className={"col-12 col-md-4 col-lg-2 " + DashboardClasses.SideNav}>
            <div className="text-center text-light mt-5">
                <img src={userPlaceHolder} alt="User's profile " width="130" className="img-fluid mt-5 rounded-circle" />
                <p className="m-2 lead"> John Doe</p>
                <hr />
                <ul className="list-unstyled ">
                    <li className="list-item my-3 "><NavLink to="/dashboard" className="text-light h6 text-decoration-none">My Profile</NavLink></li>

                </ul>
            </div>
        </div>
        <div className={"col-12 col-md-8 col-lg-10 text-light"}>
            <div className="row mt-5">
                    <div className={"card mt-lg-4 mt-md-3 mt-2 mx-2 col-12 col-md-6 col-lg-4 " + DashboardClasses.Card }>

                        <div className="card-body d-flex flex-column">
                            <p className=" lead card-text">
                                Summary
                                </p>
                                <hr/>
                            <div className=" d-flex justify-content-between ">
                                <p className="font-weight-200">Total Loan Amount: <span className="text-warning">NGN 25,000,000.00</span></p>
                                <p className="font-weight-200">Current Outstanding : <span className="text-warning">NGN 10,000,000.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={"card mt-lg-4  mt-2 mx-2 col-12 col-md-6 col-lg-4 " + DashboardClasses.Card }>

                        <div className="card-body d-flex flex-column">
                            <p className=" lead card-text">
                                Current Loan Details
                                </p>
                                <hr/>
                            <div className=" d-flex justify-content-between ">
                                <p className="font-weight-200">Student Loan: <span className="text-warning">NGN 10,000,000.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={"card mt-lg-4 mt-2 mx-2 col-12 col-md-6 col-lg-3 " + DashboardClasses.Card }>

                        <div className="card-body d-flex flex-column">
                            <p className=" lead card-text">
                                Summary
                                </p>
                                <hr/>
                            <div className=" d-flex justify-content-between ">
                                <p className="font-weight-200">Total Loan Amount: <span className="text-warning">NGN 25,000,000.00</span></p>
                                <p className="font-weight-200">Current Outstanding : <span className="text-warning">NGN 10,000,000.00</span></p>
                            </div>
                        </div>
                    </div>
           
            </div>
        </div>
    </div >
</React.Fragment >)

export default Dashboard;