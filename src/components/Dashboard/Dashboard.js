import React from 'react';
// import Sidenav from './Sidenav';
import DashboardNav from './DashboardNav';
import Summary from './Summary/Summary';
import Loan from './Calculator/Calculator';
import Settings from './Settings/Settings';
import BackToTop from '../BackToTop/BackToTop';
import { Switch, Route } from "react-router-dom";

const Dashboard = (props) => (<React.Fragment>
        <div className="container">
            <div className="row vh-100" >
                <div className={"col-12 col-md-12 h-100 col-lg-12 mt-lg-5 text-light "} id="dashboard">
                    <DashboardNav />
                    <Switch>
                        <Route render={() => <Settings {...props} />} path="/dashboard/settings" />
                        <Route render={() => <Summary {...props} />} path="/dashboard/summary" />
                        <Route render={() => <Loan {...props} />} path="/dashboard/loan" />
                    </Switch>

                </div>
                <BackToTop destination="#dashboard" />
            </div >
        </div>

    </React.Fragment >)


export default Dashboard;