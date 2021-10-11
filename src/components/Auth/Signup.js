import React from 'react';
import LoginClass from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from '../Loading/Loading';

const Signup = (props) => {
  const { handleSubmit, errors, register, watch } = useForm();

  const watchGender = watch('gender');

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(props.signUpHandler)}
        className={'p-5 row align-self-center ' + LoginClass.Form}
      >
        <p className="h1 font-weight-bold mb-3 w-100">
          {' '}
          <span className="text-light">Sign</span>{' '}
          <span className="text-success">Up</span>{' '}
        </p>
        <p className="text-warning">{props.errorMessage}</p>
        <div className="input-group my-1">
          <div className="input-group-prepend">
            <i className="fa fa-user pt-2 text-muted input-group-text"></i>
          </div>
          <input
            name="fullname"
            ref={register({ required: true })}
            type="text"
            className="form-control "
            placeholder="Full Name"
          />
        </div>
        {errors.fullname && (
          <span className="text-warning">This field is required</span>
        )}

        <div className="input-group my-1">
          <div className="input-group-prepend">
            <div className="text-muted input-group-text">@</div>{' '}
          </div>
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            className="form-control "
            placeholder="Email"
          />
        </div>
        {errors.email && (
          <span className="text-warning">Enter a valid email</span>
        )}

        <div className="input-group my-1">
          <div className="input-group-prepend">
            <i className="fa fa-key pt-2 text-muted input-group-text"></i>
          </div>

          <input
            name="password"
            type="password"
            ref={register({
              required: true,
              minLength: 6,
            })}
            className="form-control"
            placeholder="Password"
          />
        </div>
        {errors.password && (
          <span className="text-warning">
            Enter a valid password with miniimum length of 6 characters
          </span>
        )}
        <div className="row">
          <label className="text-light d-block mt-2 w-100" for="gender">
            Gender
          </label>
          <div className="input-group my-1 col-6">
            <label className="text-light" for="male">
              Male
            </label>
            <input
              name="gender"
              id="male"
              value={'male'}
              ref={register({ required: true })}
              type="radio"
              className="form-check-input "
            />
          </div>
          <div className="input-group my-1 col-5">
            <label className="text-light" for="female">
              Female
            </label>
            <input
              name="gender"
              id="female"
              value={'femmale'}
              ref={register({ required: true })}
              type="radio"
              className="form-check-input "
            />
          </div>
          {/* <div className="input-group my-1 col-4">
            <label className="text-light" for="other">
              Other
            </label>
            <input
              name="gender"
              id="other"
              value={'other'}
              ref={register}
              type="radio"
              className="form-check-input "
            />
          </div>
          {watchGender === 'other' && (
            <div className="input-group my-1 col-4">
              <input
                name="otherGender"
                type="text"
                placeholder="Your Gender"
                ref={register({ required: true })}
                className="form-control"
              />
            </div>
          )} */}

          {errors.gender && (
            <span className="text-warning ">Enter or select a gender</span>
          )}
        </div>
        <div className="row">
          <label className="text-light d-block mt-2 w-100" for="role">
            Role
          </label>
          <div className="input-group my-1 col-6">
            <label className="text-light" for="admin">
              Admin
            </label>
            <input
              name="role"
              id="admin"
              value={'admin'}
              ref={register({ required: true })}
              type="radio"
              className="form-check-input "
            />
          </div>
          <div className="input-group my-1 col-5">
            <label className="text-light" for="user">
              User
            </label>
            <input
              name="role"
              id="user"
              value={'user'}
              ref={register({ required: true })}
              type="radio"
              className="form-check-input "
            />
          </div>
          {/* <div className="input-group my-1 col-4">
            <label className="text-light" for="other">
              Other
            </label>
            <input
              name="gender"
              id="other"
              value={'other'}
              ref={register}
              type="radio"
              className="form-check-input "
            />
          </div>
          {watchGender === 'other' && (
            <div className="input-group my-1 col-4">
              <input
                name="otherGender"
                type="text"
                placeholder="Your Gender"
                ref={register({ required: true })}
                className="form-control"
              />
            </div>
          )} */}

          {errors.gender && (
            <span className="text-warning ">Enter or select a gender</span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark  text-center w-100  mx-auto mt-3"
        >
          {!props.loadState ? 'Create Account' : <Loader />}
        </button>

        <p className="mt-3 text-light text-center">
          Already have an account?{' '}
          <NavLink to="/auth" className="text-success font-weight-bold">
            Log in here
          </NavLink>
        </p>
      </form>
    </React.Fragment>
  );
};

export default Signup;
