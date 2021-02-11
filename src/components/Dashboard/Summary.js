import React from 'react';
import loanSumm from '../../assets/loanSummary.png';
import DashboardClasses from './Dashboard.module.css'

const Summary = () => (<React.Fragment>
    <div className="row mt-5">
        <div className={" mt-lg-4 mt-md-3 mt-2 p-2 col-12 col-md-6 col-lg-4 "}>
            <div className={"card " + DashboardClasses.Card}>
                <div className="card-header">
                    <div className="class-title  ">
                        <div className="">
                            <p className="h4">Summary</p>
                            <small > <span>5</span> <span>Loan(s)</span></small>
                        </div>


                    </div>
                </div>
                <div className="card-body d-flex flex-column">

                    <div className=" card-text mt-2 text-center lead">
                        <p className="font-weight-200 text-light">Total Loan Amount</p>
                        <p className="text-warning">NGN 25,000,000.00</p>
                        <img className="img-fluid " src={loanSumm} alt="loan summary" />
                        <p className="font-weight-200 text-light">Current Outstanding </p>
                        <p className="text-warning">NGN 10,000,000.00</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={" mt-lg-4 mt-md-3 mt-2 p-2 col-12 col-md-6 col-lg-4 "}>
            <div className={"card " + DashboardClasses.Card}>

                <div className="card-header">
                    <div className="card-title   ">

                        <div className="">
                            <p className="h4">Personal Loan</p>
                            <small className="">@ 5.50%</small>
                        </div>


                    </div>
                </div>
                <div className="card-body ">

                    <div className=" card-text text-md-right text-center lead">
                        {/* <i className="fa fa-area-chart fa-5x my-3 text-muted"></i> */}
                        <small className="text-light">Outstanding Amount</small>
                        <div className="d-flex justify-content-end">
                            <i className="fa fa-money mr-2 my-2 text-muted"></i>
                            <p className="text-warning"> NGN 15,000,000.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className={"card mt-2 " + DashboardClasses.Card}>


                <div className="card-header">
                    <div className="card-title">

                        <div className="">
                            <p className="h4">New Loan</p>
                            {/* <i className="fa fa-plus-circle mr-2 my-2 text-muted"></i> */}
                        </div>
                    </div>
                </div>
                <div className="card-body ">
                    <div className=" card-text text-md-left text-center lead">
                        {/* <i className="fa fa-area-chart fa-5x my-3 text-muted"></i> */}
                        <small className="text-light">Select products to meet your financial needs</small>
                        <div className="d-flex justify-content-end text-warning">
                            <i className="fa fa-plus-circle mr-2 my-2 "></i>
                            <p className=""> Get New Loan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"card mt-2 " + DashboardClasses.Card}>
                <div className="card-header">
                    <div className="card-title">
                        <div className="">
                            <p className="h4">Closed Loans</p>
                        </div>
                    </div>
                </div>
                <div className="card-body ">
                    <div className=" card-text text-md-left text-center lead">
                        {/* <i className="fa fa-area-chart fa-5x my-3 text-muted"></i> */}
                        <small className="text-light">View your completed loans </small>
                        <div className="d-flex justify-content-end text-warning">
                            <i className="fa fa-times-circle mr-2 my-2"></i>
                            <p className="">0 Loans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"mt-lg-4 mt-md-3 mt-2 p-2 col-12 col-md-6 col-lg-4 "}>
            <div className={"card mr-lg-2   " + DashboardClasses.Card}>
                <div className="card-header">
                    <div className="card-title">
                        <p className="h4">Statement </p>
                        <small >Information about all your loans</small> <i className="fa fa-rss text-muted"></i>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled">
                        <li className="list-item my-1 border-bottom  ">
                            <div className="text-light pt-2">
                                <small className="d-block">10 February 2021</small>
                                <small >Account Credit: Student Loan </small>
                                <p className="text-lg-right text-center text-warning">NGN 100,000.00</p>
                            </div>
                        </li>
                        <li className="list-item my-1 border-bottom  ">
                            <div className="text-light pt-2">
                                <small className="d-block">10 December 2020</small>
                                <small >Account Credit: Personal Loan </small>
                                <p className="text-lg-right text-center text-warning">NGN 100,000.00</p>
                            </div>
                        </li>
                        <li className="list-item my-1 border-bottom  ">
                            <div className="text-light pt-2">
                                <small className="d-block">10 September 2020</small>
                                <small >Account Credit: Enterprice Loan </small>
                                <p className="text-lg-right text-center text-warning">NGN 100,000.00</p>
                            </div>
                        </li>
                        <li className="list-item my-1 border-bottom  ">
                            <div className="text-light pt-2">
                                <small className="d-block">10 September 2020</small>
                                <small >Account Credit: Enterprice Loan </small>
                                <p className="text-lg-right text-center text-warning">NGN 100,000.00</p>
                            </div>
                        </li>
                        <li className="list-item my-1 border-bottom  ">
                            <div className="text-light pt-2">
                                <small className="d-block">10 September 2020</small>
                                <small >Account Credit: Enterprice Loan </small>
                                <p className="text-lg-right text-center text-warning">NGN 100,000.00</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>


</React.Fragment >)

export default Summary;