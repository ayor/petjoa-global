import React from 'react';
import LoginClass from './Login.module.css';

const Login = () => (<React.Fragment>
    <div className={"row vh-100 " + LoginClass.LoginHeader}>
        <div className="col h-100 d-flex flex-lg-row-reverse  flex-column  justify-content-around  ">
            <div className="align-self-top text-lg-right text-center p-5 mt-5 ">
                <p className="display-4 text-light font-weight-bold">Join Us</p>
                <p className="text-light lead">Manage your profile, know your repayment status and other analytics on your dashboard </p>

            </div>
            <form className={"p-5 row align-self-center " + LoginClass.Form}>
                <p className="h1 font-weight-bold mb-3"> <span className="text-light">Log</span> <span className="text-success">In</span> </p>
                <div className="input-group my-2">
                    <div className="input-group-prepend">
                        <i className="fa fa-envelope fa-2x text-muted input-group-text"></i>
                    </div>
                    <input type="email" className="form-control " placeholder="Email" />
                </div>
                <div className="input-group my-2">
                    <div className="input-group-prepend">
                        <i className="fa fa-key fa-2x text-muted input-group-text"></i>
                    </div>


                    <input type="pasword" className="form-control" placeholder="Password" />
                </div>

                <button className="btn btn-dark  text-center w-100  mx-auto mt-3">Login</button>

                <p className="mt-3 text-light text-center">New User?  <span className="text-success font-weight-bold">Sign up here</span></p>
            </form>
        </div>

    </div>
</React.Fragment>);

export default Login;