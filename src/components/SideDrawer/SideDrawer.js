import React, { } from 'react';
import Backdrop from './Backdrop';
import Classes from './Sidedrawer.module.css'
import { NavLink } from "react-router-dom";
const SideDrawer = (props) => {

    return (<React.Fragment>
        (<div>
            <Backdrop clicked={props.clicked} />
            <div className={Classes.Sidedrawer}>
                <ul className="navbar-nav mt-5 pt-5">
                    <li className="nav-item my-3 ">
                        <NavLink to="/" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-user-circle-o ml-2 mr-3"></i>Home</NavLink>
                    </li>

                    <li className="nav-item my-3 dropdown">
                        <NavLink to="/products"
                            className="nav-link dropdown-toggle text-light mx-2 text-uppercase font-weight-bold"
                            id="navbarDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fa fa-product-hunt ml-2 mr-3"></i>Products</NavLink>
                        <div className="dropdown-menu bg-dark"
                            aria-labelledby="navbarDropdown">
                            <NavLink to="/" className="dropdown-item bg-dark text-light my-1 text-lowercase font-weight-bold" >Student Loans</NavLink>
                            <NavLink to="/" className="dropdown-item bg-dark text-light my-1 text-lowercase font-weight-bold" >SME Loans</NavLink>
                            <NavLink to="/" className="dropdown-item bg-dark text-light my-1 text-lowercase font-weight-bold" >Travel Loans</NavLink>

                        </div>
                    </li>
                    <li className="nav-item my-3 ">
                        <NavLink to="/about" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-address-book-o ml-2 mr-3"></i>About Us</NavLink>
                    </li>
                    <li className="nav-item my-3 ">
                        <NavLink to="/calculator" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-calculator ml-2 mr-3"></i>Loan Calculator</NavLink>
                    </li>
                    {!props.isAuth ? <li className="nav-item my-3">
                        <NavLink to="/auth" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-sign-in ml-2 mr-3"></i>Login / Sign Up</NavLink>
                    </li> : null}
                    {props.isAuth ? [<li className="nav-item my-3">
                        <NavLink to="/dashboard" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-user ml-2 mr-3"></i>My Dashboard</NavLink>
                    </li>,
                    <li className="nav-item my-3">
                        <NavLink to="/" className="nav-link text-light  mx-2 text-uppercase font-weight-bold"><i className="fa fa-sign-out ml-2 mr-3"></i>Logout</NavLink>
                    </li>
                    ] : null}

                </ul>
            </div>
        </div>)
    </React.Fragment>)
};

export default SideDrawer;