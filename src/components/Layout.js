import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/AboutUsPage';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Calculator from './Calculator/Calculator';

const Layout = props => {
    return (<Router >
        <Navigation />
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/calculator" component={Calculator}/>
            <Route component={Home} path="/" />
            
        </Switch>
        <Footer />
    </Router >)
};

export default Layout;