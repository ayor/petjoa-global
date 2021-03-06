import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/6381.jpg';
import headerClass from './Header.module.css';


const Header = () => (
    <React.Fragment >
        <div className="row vh-100" id="home">
            <div className="col h-100 d-flex ">
                <div className="row h-100 align-items-center">
                    <div className="col ">
                        <div className=" p-5 text-left">
                            <div className={"  "+headerClass.HeaderText}>
                                <p className="display-4   text-capitalize  text-success font-weight-bold"><span className="text-success">Petjoa</span><span className="">Global</span> Investment Limited</p>
                                <h3 className="  text-muted font-weight-bold">Secure your financial strength in as little as 10 minutes...</h3>
                            </div>
                            <div className={" mt-5 "+headerClass.Banner}>
                                <NavLink to="/dashboard/loan" className="btn btn-success  p-3 d-block w-50" >Get A Loan <i className="ml-3 fa fa-long-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={headerImage} className="img-fluid " alt="finance img" />
                    </div>
                </div>
                {/* <div className="w-50 align-self-top">
                   
                </div>
                <div className="w-50">
                   

                </div> */}
            </div>



        </div>
    </React.Fragment>
);

export default Header