import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/AboutUsPage';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Calculator from './Calculator/Calculator';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './Auth/LoginPage';

const Layout = () => {
    return (<Router >
        <Navigation />
        <Switch>
            <Route path="/auth" component={LoginPage} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/calculator" component={Calculator}/>
            <Route component={Home} path="/" />
            
        </Switch>
        <Footer />
    </Router >)
};

export default Layout;