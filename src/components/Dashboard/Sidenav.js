import React from 'react';
import userPlaceHolder from '../../assets/index.png';
import { NavLink } from 'react-router-dom';


const SideNav = () => (<React.Fragment>

            <div className="text-center font-weight-bold text-success mt-5">
                <img src={userPlaceHolder} alt="User's profile " width="100" className="img-fluid mt-5 rounded-circle" />
                <p className="m-2 h6 "> John Doe</p>
                <hr />
                <ul className="list-unstyled ">
                    <li className="list-item my-3  mx-2 rounded p-1"><NavLink to="/dashboard" className="text-success  text-decoration-none">My Dashboard <i className="  fa fa-user"></i></NavLink></li>
                    <li className="list-item my-3  mx-2 rounded p-1"><NavLink to="/dashboard/details" className="text-success  text-decoration-none">Profile Settings <i className="fa fa-cog"></i> </NavLink></li>

                </ul>
            </div>
</React.Fragment >)

export default SideNav;