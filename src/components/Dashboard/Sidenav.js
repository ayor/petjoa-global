import React from 'react';
import userPlaceHolder from '../../assets/index.png';
import { NavLink } from 'react-router-dom';


const SideNav = () => (<React.Fragment>

            <div className="text-center text-light mt-5">
                <img src={userPlaceHolder} alt="User's profile " width="130" className="img-fluid mt-5 rounded-circle" />
                <p className="m-2 lead"> John Doe</p>
                <hr />
                <ul className="list-unstyled ">
                    <li className="list-item my-3 bg-warning mx-2 rounded p-1"><NavLink to="/dashboard" className="text-dark h6 text-decoration-none">My Dashboard <i className="  fa fa-user"></i></NavLink></li>
                    <li className="list-item my-3 bg-warning mx-2 rounded p-1"><NavLink to="/dashboard/details" className="text-dark h6 text-decoration-none">Profile Settings <i className="fa fa-cog"></i> </NavLink></li>

                </ul>
            </div>
</React.Fragment >)

export default SideNav;