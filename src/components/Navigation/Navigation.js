import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = props => (
    <nav className="navbar navbar-expand-lg navbar-light nav_bar justify-content-between fixed-top">
        <a href="/" className="navbar-brand">
            <img src="https://i2.wp.com/petjoaglobal.com/wp-content/uploads/2017/03/cropped-Petjoa-logo_150-x-150.png?fit=150%2C75&ssl=1" width="100" className="image rounded" alt="company brand" />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navBar">
            <ul className="navbar-nav ">
                <li className="nav-item ">
                    <NavLink to="/" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Home</NavLink>
                </li>

                {/* <li className="nav-item dropdown">
                    <NavLink to="/products"
                        className="nav-link dropdown-toggle text-success mx-2 text-uppercase font-weight-bold"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Products</NavLink>
                    <div className="dropdown-menu" 
                    aria-labelledby="navbarDropdown">
                        <NavLink to="/" className="dropdown-item" >Action</NavLink>
                        <NavLink to="/" className="dropdown-item" >Another action</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink to="/" className="dropdown-item" s>Something else here</NavLink>
                    </div>
                </li>*/}
                <li className="nav-item "> 
                    <NavLink to="/about" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">About Us</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink to="/calculator" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Loan Calculator</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink to="/" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Login</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink to="/" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Sign Up</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navigation;