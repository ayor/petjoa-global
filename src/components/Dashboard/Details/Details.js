import React from 'react';
import Dashboard_Classes from "../Dashboard.module.css";
import { NavLink } from 'react-router-dom';


const Details = (props) => {

    const user = props.user;

    const user_keys = Object.keys(user);

    let userIsUpdated = false;
    
    user_keys.forEach((key)=> {
        
        if(user[key] === ""){
            userIsUpdated = true;
            return;
        }
    })

    return (<React.Fragment>
        <div className="row border-bottom mt-lg-3 mt-md-2 p-3 text-dark  ">
            <div className={" col-xs-12 col-md-6 "}>
                <div className={"card  " }>


                    <div className="card-header">
                        <div className="card-title">

                            <div className="">
                                <p className="h4">New Loan</p>
                                {/* <i className="fa fa-plus-circle mr-2 my-2 text-muted"></i> */}
                            </div>
                        </div>
                    </div>
                    <div className="card-body ">
                        <div className=" card-text text-left lead">
                            {/* <i className="fa fa-area-chart fa-5x my-3 text-muted"></i> */}
                            <small className="">Select products to meet your financial needs</small>
                            <div className="d-flex justify-content-end mt-2">
                                {
                                    !userIsUpdated ? (<NavLink to='/dashboard/loan' className="text-success" >   
                                    <i className="fa fa-plus-circle mr-3"></i>
                                     Get New Loan </NavLink>) : <NavLink to='/dashboard/settings' className="text-success">Update your profile to request a loan</NavLink>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={" col-xs-12 col-md-6 "}>
                <div className={"card "}>
                    <div className="card-header">
                        <div className="card-title">
                            <div className="">
                                <p className="h4">Closed Loans</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body ">
                        <div className=" card-text text-left lead">
                            {/* <i className="fa fa-area-chart fa-5x my-3 text-muted"></i> */}
                            <small className="">View your completed loans </small>
                            <div className="d-flex justify-content-end text-warning mt-2">
                                <NavLink to='/dashboard/loan' className="text-danger">
                                    <i className="fa fa-times-circle mr-3 "></i>
                                0 Loans </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment >)
}
export default Details;