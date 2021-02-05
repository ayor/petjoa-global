import React from 'react';
import { NavLink } from 'react-router-dom'

import headerClass from './Header.module.css';


const Header = props => (
    <React.Fragment >
        
        <div className="row">
            <div className="col">
                <div className={headerClass.Header}>
                    <div className={headerClass.HeaderText}>
                        <p className="display-4  text-center text-capitalize  text-light font-weight-bold"><span className="text-success">Petjoa</span><span className="">Global</span> Investment Limited</p>
                    </div>
                    <div className={headerClass.Banner}>
                        <NavLink to="/" className="btn btn-success d-block w-100" >Get A Loan <i className="ml-3 fa fa-money"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>



    </React.Fragment>
);

export default Header