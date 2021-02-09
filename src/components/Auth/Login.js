import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, withRouter } from 'react-router-dom';
import LoginClass from './Login.module.css';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();


    const submitHandler = (data, event) => {
        event.preventDefault();
        console.log(data)
        props.history.push('/dashboard')
    }
    return (<React.Fragment>

        <form onSubmit={handleSubmit(submitHandler)} className={"p-5 row align-self-center " + LoginClass.Form}>
            <p className="h1 font-weight-bold mb-3"> <span className="text-light">Log</span> <span className="text-success">In</span> </p>
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className="text-muted input-group-text">@</div>
                </div>
                <input name="email" type="email" ref={register({ required: true })} className="form-control " placeholder="Email" />
            </div>
            {errors.email && <span className="text-warning">Enter a valid email</span>}
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <i className="fa fa-key fa-2x text-muted input-group-text"></i>
                </div>


                <input name="password" ref={register({
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    minLength: 6
                })} type="password" className="form-control" placeholder="Password" />
            </div>
            {errors.password && <span className="text-warning">Password must have a minimum of 6 characters</span>}
            <button type="submit" className="btn btn-dark  text-center w-100  mx-auto mt-3">Login</button>

            <p className="mt-3 text-light text-center">New User?  <NavLink to="/auth/signup" className="text-success font-weight-bold">Sign up here</NavLink></p>
        </form>

    </React.Fragment>)
};

export default withRouter(Login);