import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import petjoaLogo from '../../assets/petjoa.png';
import NavClasses from './Navigation.module.css';


const Navigation = props => {

    const [page, setPage] = useState("home");
    const [navState]  = useState(["nav-link nv_nav_link  mx-2 text-uppercase text-success"])
    const [navActiveState]  = useState(["nav-link nv_nav_link  mx-2 text-uppercase text-success", NavClasses.CurrentNavLink]);    

    const handleNavClick = (data) => {
        setPage(data);
    }

    return (<nav className={"navbar navbar-expand-md navbar-light nav_bar fixed-top "}>
        <div className="container-fluid ">
            <a href="/" className="navbar-brand">
                <img src={petjoaLogo} width="40" className="image rounded-circle" alt="company brand" />
            </a>
            <div className={NavClasses.Hamburger}>
                <Hamburger clicked={props.clicked} />
            </div>
            {/* <div > */}
            <div className={NavClasses.NavLink}>
                <button type="button" className="navbar-toggler " data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-success">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav font-weight-bold">
                        <li className="nav-item ">
                            <a href="/" onClick={handleNavClick.bind(this, "home")} className={page === "home" ? navActiveState.join(' ') : navState.join(' ') }>Home</a>
                        </li>
                        <li className="nav-item ">
                            <a href="/home#About" title="About us" onClick={handleNavClick.bind(this, "about")} className={page === "about" ? navActiveState.join(' ') : navState.join(' ') }>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/home#products"
                                onClick={handleNavClick.bind(this, "product")} className={page === "product" ? navActiveState.join(' ') : navState.join(' ') }>
                                Products</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={NavClasses.NavLink}>
                <ul className="navbar-nav font-weight-bold">
                    {!props.isAuth ? <li className="nav-item ">
                        <NavLink to="/auth" title="Login" onClick={handleNavClick.bind(this, "login")} className={page === "login" ? navActiveState.join(' ') : navState.join(' ') }>Login / Sign up</NavLink>
                    </li> : null}
                    {props.isAuth ? [<li key={1} className="nav-item dropdown">
                        <NavLink
                            to="/dashboard/summary"
                            title="Profile"
                            className="nav-link   mx-2 text-uppercase text-success"
                            id="userDropDown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"> Hi, 
                            {props.user.firstname}</NavLink>
                          </li>,
                    <li key={2} className="nav-item ">
                        <NavLink to="/" title="logout" className="nav-link   mx-2 text-uppercase text-success">Sign Out</NavLink>
                    </li>
                    ] : null}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;