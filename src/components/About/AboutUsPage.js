import React from 'react';
import coreValues from '../../assets/pexels-lukas-669580.jpg';
import promise from '../../assets/pexels-cade-prior-4009355.jpg';
import AboutUs_Classes from './AboutUs.module.css';

const AboutUsPage = () => (<React.Fragment>
    <div className={`row ${AboutUs_Classes.AboutUs}`}>
        <div className="col  h-100">
            <div className="row h-100">
                <div className="col-12 col-lg-5 col-md-12 m-3 pt-5 align-self-top">
                    <div className={`text-lg-left text-center p-3 ${AboutUs_Classes.Banner_About}`}>
                        <p className="h1 text-capitalize text-light font-weight-bold mt-5"> About Us</p>
                        <hr />
                        <p className="lead text-light"> <span className="font-weight-bold text-success">PETJOA GLOBAL INVESTMENT LIMITED </span>is a thrift firm that lends money to bankers and professional bodies (salary earners) with static salary date, to help enhance the standard of living in Nigeria. &nbsp;We are registered under (SEC) security and exchange commission.</p>

                    </div>
                </div>

                <div className="col-12 col-lg-6 col-md-12 m-3 align-self-center">
                    <div className={`text-lg-right text-center p-3 ${AboutUs_Classes.Vision}`}>
                        <p className="h1 text-capitalize text-warning font-weight-bold"> Vision Statment</p>
                        <hr />
                        <p className="lead text-light"> We exceed our customers expectations in our commitment to their financial success . To provide &nbsp;sound financial management in order to maintain earnings for our continued growth and to provide our employees with a challenging and rewarding career.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
            <img src={coreValues} className="img-fluid h-100" alt="core values" />
        </div>
        <div className="col-12 col-md-6 col-lg-6  p-5">

            <div className={`m-1  ${AboutUs_Classes.Core}`}>
                <p className="text-center"> <i className="fa fa-cogs fa-5x  text-dark"></i></p>
                <p className="h1 text-dark text-center font-weight-bold">
                    CORE VALUES
                    </p>
                <p className="lead p-3 font-weight-100">
                    Our &nbsp;Values help us &nbsp;drive our objectives and provide us with guidelines  which we achieve meaningful results. Our cooperate values are guideposts to mark the path and guidelines &nbsp;within which we behave in our dealings with each other, our clients and the communities in which we operate. Only  maintaining this shared focus do we as individuals, become a successful team, and Petjoa achieves its full potential.
                  <br />
                    <span className="font-weight-bold ">  Funding is as little as 12 Hours.</span>
                    <br />
                    Often in business, you need rapid access to financing to capitalize on opportunity. And all too often, the banks takes too long to approve the funding, if they approve it at all. At PGIL, we have been providing working capital to business people like you since 2013, delivering financing solutions quickly and effectively. With our working capital loans, we have helped hundreds of businesses receive hundreds of millions of Naira in Loan approvals.
                    </p>
            </div>
        </div>
    </div>
    <div className="row flex-lg-row-reverse">
    <div className="col-12 col-md-6 col-lg-6">
        <img src={promise} className="img-fluid h-md-100" alt="core values" />
        </div>
        <div className="col-12 col-md-6 col-lg-6  p-5">

            <div className={`m-1  ${AboutUs_Classes.Banner_About}`}>
                <p className="text-center"> <i className="fa fa-line-chart fa-2x  text-dark"></i></p>
                <p className="h1 text-dark text-center font-weight-bold">
                    Goals
                    </p>
                <p className="lead p-3 font-weight-200">
                    PGIL &nbsp;goal is to create customer &nbsp;loyalty , shareholder value &nbsp;and
                    Employee satisfaction
                   </p>
            </div>
            <div className=" m-2 mt-5" >
                <p className="text-center"> <i className="fa fa-bullseye fa-2x  text-dark"></i></p>
                <p className="h1 text-dark text-center font-weight-bold"> Promise</p>
                <p className="lead font-weight-200">We will strengthen these relationship  providing the right solution that combine our &nbsp;technology,experience and financial strength.</p>
            </div>
        </div>
        
    </div>

</React.Fragment>)

export default AboutUsPage;