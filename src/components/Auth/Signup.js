import React from 'react';
import LoginClass from './Login.module.css';
import {NavLink} from 'react-router-dom';

const Signup = () => {
    return (<React.Fragment>
        {/* onSubmit={handleSubmit(submitHandler)} */}
 <form  className={"p-5 row align-self-center " + LoginClass.Form}>
                    <p className="h1 font-weight-bold mb-3"> <span className="text-light">Sign</span> <span className="text-success">Up</span> </p>
                    <div className="input-group my-2">
                        <div className="input-group-prepend">
                            <i className="fa fa-user fa-2x text-muted input-group-text"></i>
                        </div>
                        <input name="firstname" type="text"  className="form-control " placeholder="First Name" />
                    </div>
                    {/* {errors.firstname && <span className="text-warning">This field is required</span>} */}

                    <div className="input-group my-2">
                        <div className="input-group-prepend">
                            <i className="fa fa-user fa-2x text-muted input-group-text"></i>
                        </div>
                        <input name="lastname" type="text"  className="form-control " placeholder="Last Name" />
                    </div>
                    {/* {errors.lastname && <span className="text-warning">This field is required</span>} */}

                    <div className="input-group my-2">
                        <div className="input-group-prepend">
                        <div className="text-muted input-group-text">@</div>                        </div>
                        <input name="email" type="email"  className="form-control " placeholder="Email" />
                    </div>
                    {/* {errors.email && <span className="text-warning">Enter a valid email</span>} */}
                  
                    <div className="input-group my-2">
                        <div className="input-group-prepend">
                            <i className="fa fa-key fa-2x text-muted input-group-text"></i>
                        </div>
                        {/* ref={register({
                            required: true,
                            pattern:  /^[A-Za-z]+$/i,
                            minLength: 6
                         })} */}

                        <input name="password"  type="password" className="form-control" placeholder="Password" />
                    </div>
                    {/* {errors.password && <span className="text-warning">Password must have a minimum of 6 characters</span>} */}
                   
                    <label className="text-light d-block mt-2 w-100" for="gender">Gender</label>
                     <div className="input-group my-2 col-2">
                     <label  className="text-light" for="male">Male</label>
                        <input name="gender" id="male" type="radio"  className="form-check-input "/>
                    </div>
                     <div className="input-group my-2 col-2">
                     <label className="text-light" for="female">Female</label>
                        <input name="gender" id="female" type="radio"  className="form-check-input "/>
                    </div>
                     <div  className="input-group my-2 col-2">
                     <label className="text-light" for="other">Other</label>
                        <input name="gender" id="other" type="radio"  className="form-check-input "/>
                    </div>
                   <button type="submit" className="btn btn-dark  text-center w-100  mx-auto mt-3">Create Account</button>

                    <p className="mt-3 text-light text-center">Already have an account? <NavLink to="/auth" className="text-success font-weight-bold">Log in here</NavLink></p>
                </form>
    </React.Fragment>)
}

export default Signup;