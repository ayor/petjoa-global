import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import Login from './Login';
import SignUp from './Signup';
import { Switch, Route, withRouter } from 'react-router-dom'
import LoginClass from './Login.module.css';
import { axiosInstance } from "../../axios-instance";


const LoginPage = (props) => {

    const [errorMessage, setErrorMessage] = useState();
    const [loaderState, setLoaderState] = useState(false);

    const loginHandler = async (data) => {

        try {
            setLoaderState(true);
            const response = await axiosInstance({
                url: '/auth/login',
                data,
                method: 'POST'
            });

            if (response.status === 200) {
                setLoaderState(false);

                localStorage.setItem('token', response.data.token);

                const adminStatus = await props.login(response.data.user);

                if (adminStatus) {
                    props.history.push('/admin/dashboard');
                    return;
                };

                props.history.push('/dashboard/summary');
            }

        } catch ({ response }) {
            
            setLoaderState(false);
            if (!response) {
                setErrorMessage("An error occured, kindly check your network connection");
            } else {
                switch (response.status) {
                    case 401:
                        setErrorMessage(` ${response.data.error['message']}`);
                        break;
                    case 400:
                        setErrorMessage(`Kindly enter your ${response.data.error['errors'].errors[0].param}`);
                        break;
                    default:
                        setErrorMessage(response.data.error.message);
                        break;
                }
            }

            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }

    }

    const signUpHandler = async (data, event) => {
        try {
            setLoaderState(true);
            event.preventDefault();
            const gender = data.otherGender ? data.otherGender : data.gender;

            const signUpData = {
                ...data,
                gender
            }
            const response = await axiosInstance({
                method: 'POST',
                url: '/auth/signup',
                data: { ...signUpData },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setLoaderState(false);
                localStorage.setItem('token', response.data.token);
                props.login(response.data.data);
                props.history.push('/dashboard/summary')
            }
        } catch ({ response }) {
            
            setLoaderState(false);
            switch (response.status) {
                case 401:
                    setErrorMessage(` ${response.data.error['message']}`);
                    break;
                case 400:
                    setErrorMessage(`Kindly enter your ${response.data.error['errors'].errors[0].param}`);
                    break;
                default:
                    setErrorMessage(response.data.error.message);
                    break;
            }
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }

    }

    return (<React.Fragment>
        <div className={"row vh-100 " + LoginClass.LoginHeader}>
            <div className="col h-100 d-flex  flex-column justify-content-around  ">

                <Switch>
                    <Route path="/auth/signup" render={() => <SignUp signUpHandler={signUpHandler} errorMessage={errorMessage} loadState={loaderState} />} />
                    <Route path="/auth" render={() => <Login submitHandler={loginHandler} errorMessage={errorMessage} loadState={loaderState} />} />
                </Switch>
            </div>

        </div>
    </React.Fragment>)
};

export default withRouter(LoginPage);