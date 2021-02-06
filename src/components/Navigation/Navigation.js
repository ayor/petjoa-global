import React from 'react';
import { NavLink } from 'react-router-dom';
import petjoaLogo from '../../assets/petjoa.png'
const Navigation = props => (
    <nav className="navbar navbar-expand-lg navbar-light nav_bar justify-content-between fixed-top">
        <div className="container-fluid ">
            <a href="/" className="navbar-brand">
                <img src={petjoaLogo} width="40" className="image rounded" alt="company brand" />
            </a>
            <button type="button" className="navbar-toggler " data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-success">
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navBar">
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <NavLink to="/" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Home</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                    <NavLink to="/products"
                        className="nav-link dropdown-toggle text-success mx-2 text-uppercase font-weight-bold"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Products</NavLink>
                    <div className="dropdown-menu bg-dark" 
                    aria-labelledby="navbarDropdown">
                        <NavLink to="/" className="dropdown-item bg-dark text-success my-1 text-lowercase font-weight-bold" >Student Loans</NavLink>
                        <NavLink to="/" className="dropdown-item bg-dark text-success my-1 text-lowercase font-weight-bold" >SME Loans</NavLink>
                        <NavLink to="/" className="dropdown-item bg-dark text-success my-1 text-lowercase font-weight-bold" >Travel Loans</NavLink>

                    </div>
                </li>
                    <li className="nav-item ">
                        <NavLink to="/about" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">About Us</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/calculator" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Loan Calculator</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/login" className="nav-link text-success  mx-2 text-uppercase font-weight-bold">Login / Sign Up</NavLink>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
)

export default Navigation;