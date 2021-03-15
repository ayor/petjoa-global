import React from 'react';
import { NavLink } from 'react-router-dom';
import studentImg from '../../assets/414342-PDTRP3-756.jpg';
import personalImg from '../../assets/5106930.jpg';
import enterpriseImg from '../../assets/20943729.jpg';
import missionClasses from './Mission.module.css';

const Mission = props => (
    <React.Fragment>
        <div className="row mt-5 justify-content-center p-5" id="products">
            <div className="col-12 col-md-6 col-lg-4">
                <div className={"card p-2  mb-4 " + missionClasses.Cards} >
                    <img src={studentImg} className="img-fluid rounded card-image-top w-50 mx-auto " alt="students loan" />
                    <div className="card-body" >
                        <h3 className=" text-capitalize text-center mb-2 font-weight-bold">Students Loans</h3>
                        <p className="  text-muted "> We are committed to supporting young individuals to achieve thier dreams of fulfilling their educational dreams. </p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 ">
                <div className={"card p-2  mb-4 " + missionClasses.Cards} >
                    <img src={personalImg} className="img-fluid rounded  card-image-top w-50 mx-auto" alt="personal loan" />

                    <div className="card-body" >
                        <h3 className=" text-center text-capitalize mb-2 font-weight-bold ">Personal Loans</h3>
                        <p className=" text-muted card-text">Salary earners have easy access to funds within 10 minutes. <br/><small className="text-success font-weight-bold">terms and conditions apply</small> </p>
                    </div>
                </div>

            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <div className={"card p-2  mb-4 " + missionClasses.Cards} >
                    <img src={enterpriseImg} className="img-fluid rounded  card-image-top w-50 mx-auto" alt="enterprise loan" />
                    <div className="card-body" >
                        <h3 className=" text-center text-capitalize mb-2 font-weight-bold text-dark">Enterprise Loans</h3>
                        <p className="  text-muted "> We are committed to supporting young individuals to achieve thier dreams of fulfilling their educational dreams. </p>
                    </div>
                </div>

            </div>
        </div>
        <div className="row mt-5 justify-content-center bg-dark p-5" id="process">
            <div className="col">
                <div className="text-center how_it_works_header_text w-50 mx-auto">
                    <p className=" text-uppercase text-warning">How it  works</p>
                    <h1 className="h3 font-weight-bold text-light">Access to finance in minutes</h1>
                    <p className="text-muted" > We make use of technology to save your time and our processes are tailored to remove bottlenecks which include uneccesary paper work in processing your loan. </p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="card p-2 border-0 mb-3 bg-dark" >
                            <div className="card-body text-light" >
                                <h3 className="h3 text-capitalize font-weight-bold">Step 1</h3>
                                <p className="  text-warning "> Click on the get loan button </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="card p-2 border-0 mb-3 bg-dark" >
                            <div className="card-body text-light" >
                                <h3 className="h3 text-capitalize  font-weight-bold">Step 2</h3>
                                <p className="  text-warning "> create an account with us. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="card p-2 border-0 mb-3 bg-dark" >
                            <div className="card-body text-light" >
                                <h3 className="h3 text-capitalize  font-weight-bold">Step 3</h3>
                                <p className="  text-warning "> request a loan </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="get_loan_button text-center">
                    <NavLink to="/dashboard/loan" className="btn btn-success " >Get A Loan  </NavLink>
                </div>


            </div>
        </div>

    </React.Fragment >
);

export default Mission;

