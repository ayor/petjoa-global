import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Dashboard from '../components/Dashboard/Dashboard'
import LoginPage from './Auth/LoginPage';
import SideDrawer from './SideDrawer/SideDrawer';


const initialState = {
    isAuth: false,
    sideDrawerState: false,
    user: {},
    errorMessage: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            let prevAuthState = true;
            let user = action.payload;
            return { ...state, isAuth: prevAuthState, user };
        case 'TOGGLE_SIDEDRAWER':
            let prevState = state.sideDrawerState;
            return { ...state, sideDrawerState: !prevState };
        case 'UPDATE_USER':
           let newUser = action.payload;
            return { ...state, user : newUser};
        default:
            return state;
    }
}

const Layout = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loginHandler = (data) => {
        
        dispatch({ type: 'LOGIN', payload: data });
       
    }

    const updateUserHandler = (userData) => {
        
        dispatch({ type: 'UPDATE_USER', payload: userData });
    }
    

    const sideDrawer = (state.sideDrawerState ? <SideDrawer clicked={() => dispatch({ type: 'TOGGLE_SIDEDRAWER' })} isAuth={state.isAuth} /> : null);
    return (<Router >
        <Navigation clicked={() => dispatch({ type: 'TOGGLE_SIDEDRAWER' })} user={state.user} isAuth={state.isAuth} />
        { sideDrawer}
        <div style={{
            position: state.sideDrawerState ? "fixed" : "relative"
        }}>
            <Switch >
                <Route path="/auth" render={() => <LoginPage login={loginHandler} />} />
                
                <Route path="/dashboard" render={() => <Dashboard user={state.user} updateUser={ updateUserHandler} />} />
                <Route component={Home} path="/" />
            </Switch>
        </div>


    </Router >)
}

export default Layout;