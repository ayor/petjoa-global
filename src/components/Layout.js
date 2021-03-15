import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Dashboard from '../components/Dashboard/Dashboard'
import AdminDashboard from '../components/Admin/AdminDashboard'
import LoginPage from './Auth/LoginPage';
import SideDrawer from './SideDrawer/SideDrawer';
import { axiosInstance } from '../axios-instance';

const initialState = {
    isAuth: false,
    sideDrawerState: false,
    user: {},
    loans: [],
    errorMessage: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':

            let auth = true;
            let user = action.payload.user;
            let loans = action.payload.loans
            return { ...state, user, loans, isAuth: auth };
        case 'TOGGLE_SIDEDRAWER':
            let prevState = state.sideDrawerState;
            return { ...state, sideDrawerState: !prevState };
        case 'UPDATE_USER':
            let newUser = action.payload;
            return { ...state, user: newUser };
        case 'UPDATE_AUTH':
            
            let authState = action.payload;
            return { ...state, isAuth: authState };
        default:
            return state;
    }
}

const Layout = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loginHandler = async (data) => {

        try {
            if (data.type === "AD") {
                const token = localStorage.getItem('token');

                const response = await axiosInstance(
                    {
                        url: '/loan/loans',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });

                const payload = { user: data, loans: response.data.data };

                dispatch({ type: 'LOGIN', payload: payload });

                return data.type === "AD";
            }
            dispatch({ type: 'LOGIN', payload: { user: data, loans: [] } });

            return data.type === "AD";

        } catch (error) {

            throw error
        };

    }

    const signOutHandler = (authState) => {
        dispatch({ type: 'UPDATE_AUTH', payload: authState });
        dispatch({ type: 'UPDATE_USER', payload: {} });
    }

    const updateUserHandler = (userData) => {

        dispatch({ type: 'UPDATE_USER', payload: userData });
    }


    const sideDrawer = (state.sideDrawerState ? <SideDrawer clicked={() => dispatch({ type: 'TOGGLE_SIDEDRAWER' })} isAuth={state.isAuth} /> : null);
    return (<Router >
        <Navigation
            clicked={() => dispatch({ type: 'TOGGLE_SIDEDRAWER' })}
            user={state.user}
            isAuth={state.isAuth}
            signOut={signOutHandler}
            loans={state.loans} />
        { sideDrawer}
        <div style={{
            position: state.sideDrawerState ? "fixed" : "relative"
        }}>
            <Switch >
                <Route component={AdminDashboard} path="/admin/dashboard" />
                <Route render={()=> <Home auth={state.isAuth}/>} path="/home" />
                <Route path="/auth" render={() => <LoginPage login={loginHandler} />} />
                <Route path="/dashboard" render={() => <Dashboard user={state.user} updateUser={updateUserHandler} />} />
                <Route render={()=> <Home auth={state.isAuth}/>} path="/" />
            </Switch>
        </div>


    </Router >)
}

export default Layout;