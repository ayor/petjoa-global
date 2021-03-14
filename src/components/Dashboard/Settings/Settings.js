import React, { useState } from 'react';
import DashboardClasses from '../Dashboard.module.css';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../axios-instance';
import Loader from "../../Loading/Loading";


const Settings = ({ user, updateUser }) => {

    const { handleSubmit, register } = useForm();

    const [userState, setUserState] = useState(user);
    const [buttonState, setButtonState] = useState(true);
    const [loaderState, setLoaderState] = useState(false);


    const handleChange = (input, event) => {

        setButtonState(false);

        const value = event.target.value;
        let new_user = { ...userState };

        new_user[input] = value;

        setUserState(new_user);
    };


    const saveChangeHandler = async (data) => {
       setLoaderState(true);
       const response = await  axiosInstance.post('/user/update_user', {...data, _id: userState._id});
       const new_user = response.data.data;
       if(response.status === 201 || response.status === 200){
        setLoaderState(false);
        setUserState(new_user);
        updateUser({...response.data.data});
       }
       

    }
    return (<React.Fragment>
        <div className="h-75 d-flex align-items-center text-dark">
            <form onSubmit={handleSubmit(saveChangeHandler)} className={"p-5 w-100 " + DashboardClasses.Settings}>
            <p className="h1 text-center font-weight-bold mb-4 w-100"> <span className="text-light">Update Profile</span> </p>
                <div className="row my-2 ">
                    <div className="input-group col-12 col-md-6">
                        <label className="py-1 mr-2">First Name: </label>
                        <input name="firstname" type="text" className="form-control " ref={register} onChange={handleChange.bind(this, 'firstname')} value={userState.firstname} />
                    </div>
                    <div className="input-group col-12 col-md-6">
                        <label className="py-1 mr-2">Last Name: </label>
                        <input name="lastname" type="text" className="form-control " ref={register} onChange={handleChange.bind(this, 'lastname')} value={userState.lastname} />
                    </div>
                </div>
                <div className="row my-2 ">
                    <div className="input-group col-12">
                        <label className="py-1 mr-2">Email: </label>
                        <input name="email" type="email" className="form-control " ref={register} onChange={handleChange.bind(this, 'email')} value={userState.email} />
                    </div>
                </div>
                <div className="row my-2 ">
                    <div className="input-group col-12">
                        <label className="py-1 mr-2">Address: </label>
                        <input name="address" type="text" className="form-control " ref={register} onChange={handleChange.bind(this, 'address')} value={userState.address} />
                    </div>
                </div>
                <div className="row my-2 ">
                    <div className="input-group col-12">
                        <label className="py-1 mr-2">Office : </label>
                        <input name="office" type="text" className="form-control " ref={register} onChange={handleChange.bind(this, 'office')} value={userState.office} />
                    </div>
                </div>
                <div className="row my-2 ">
                    <div className="input-group col-12  col-md-6">
                        <label className="py-1 mr-2">Phone Number: </label>
                        <input name="phone" type="tel" className="form-control" ref={register} onChange={handleChange.bind(this, 'phone')} value={userState.phone} />
                    </div>

                    <div className="input-group col-12  col-md-6">
                        <label className="py-1 mr-2">Gender: </label>
                        <input name="gender" type="text" className="form-control" ref={register} onChange={handleChange.bind(this, 'gender')} value={userState.gender} />
                    </div>

                </div>
                <div className="row">
                    <div className="input-group col-12  col-md-12">
                        <label className="py-1 mr-2">Role: </label>
                        <input name="position" type="text" className="form-control" ref={register} onChange={handleChange.bind(this, 'position')} value={userState.position} />
                    </div>
                </div>
                <button type="submit" disabled={buttonState} className="btn btn-light  mt-3">{!loaderState ? "Save Changes" : <Loader/>}</button>
            </form>
        </div>
    </React.Fragment>)
}

export default Settings;