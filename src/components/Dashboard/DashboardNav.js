import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardClasses from './Dashboard.module.css';

const DashboardNav = (props) => (

    <nav className="navbar mt-sm-5 mb-5  navbar-expand p-4 ">

        <div className="collapse navbar-collapse border-bottom ">
            <ul className="navbar-nav  ">
                <li className={"nav-item  "+DashboardClasses.Nav_links}>
                    <NavLink to="/dashboard/summary" className="nav-link nv_nav_link text-muted text-decoration-none mx-2 text-uppercase " activeClassName={DashboardClasses.activeClass}>Summary</NavLink>
                </li>
                <li className={"nav-item  "+DashboardClasses.Nav_links}>
                    <NavLink to="/dashboard/settings" className="nav-link nv_nav_link text-muted text-decoration-none mx-2 text-uppercase " activeClassName={DashboardClasses.activeClass}>Profile</NavLink>
                </li>
                <li className={"nav-item  "+DashboardClasses.Nav_links}>
                    <NavLink to="/dashboard/loan" className="nav-link nv_nav_link text-muted text-decoration-none mx-2 text-uppercase " activeClassName={DashboardClasses.activeClass}>Get Loan</NavLink>
                </li>

            </ul>
        </div>
    </nav>


);

export default DashboardNav; 