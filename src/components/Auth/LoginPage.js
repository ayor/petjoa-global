import React from 'react';
// import { useForm } from 'react-hook-form';
import Login from './Login';
import SignUp from './Signup';
import { Switch, Route } from 'react-router-dom'
import LoginClass from './Login.module.css';

const LoginPage = () => {
    // const { register, handleSubmit, errors } = useForm();
    // const submitHandler = (data, event) => {

    //     event.preventDefault();
    //     console.log(data)
    // }
    return (<React.Fragment>
        <div className={"row vh-100 " + LoginClass.LoginHeader}>
            <div className="col h-100 d-flex flex-lg-row-reverse  flex-column  justify-content-around  ">
                <div className="align-self-top text-lg-right text-center p-5 mt-5 ">
                    <p className="display-4 text-light font-weight-bold">Join Us</p>
                    <p className="text-light lead">Manage your profile, know your repayment status and other analytics on your dashboard </p>

                </div>
                <Switch>
                    <Route path="/auth/signup" component={SignUp} />
                    <Route path="/auth" component={Login} />

                </Switch>
            </div>

        </div>
    </React.Fragment>)
};

export default LoginPage;