import React from 'react';
import Sidenav from './Sidenav';
import Summary from './Summary';

import DashboardClasses from './Dashboard.module.css'

const Dashboard = () => (<React.Fragment>
    <div className="row vh-100">
        <div className={"col-12 col-md-3 col-lg-2 " + DashboardClasses.SideNav}>
            <Sidenav />
        </div>
        <div className={"col-12 col-md-9 col-lg-10 text-light"}>
            <Summary/>
               </div>
    </div >
</React.Fragment >)

export default Dashboard;