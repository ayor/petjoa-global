import React, { useState, useEffect } from 'react';
import AboutUS from '../../assets/20945597-removebg-preview.png';
import help from '../../assets/3877820-removebg-preview.png';
import BackToTop from '../BackToTop/BackToTop';
import { NavLink } from 'react-router-dom';
import AboutUs_Classes from './AboutUs.module.css';

const AboutUsPage = () => {
    const [aboutUs, setAboutClasses] = useState([])
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 204) {

                setAboutClasses([AboutUs_Classes.Banner_About, AboutUs_Classes.AboutImg]);
            } else {

                setAboutClasses([])
            }
        });
        return () => {
            document.removeEventListener('scroll', () => {
                if (window.scrollY >= 204) {

                    setAboutClasses([AboutUs_Classes.Banner_About, AboutUs_Classes.AboutImg]);
                } else {

                    setAboutClasses([])
                }
            });
        }
    }, [])
    return (<React.Fragment>
        <div className={`row   ${AboutUs_Classes.AboutUs}`} id="About">
            <div className="col  h-100 ">
                <div className="row h-100 align-items-center ">
                    <div className="col ">
                        <div className={`text-right my-2 `}>

                            <img src={AboutUS} alt="secure transactions" className={"img-fluid rounded " + aboutUs[1]} />
                        </div>

                    </div>

                    <div className="col">
                        <div className={` p-5  ${aboutUs[0]}`}>
                            <p className="text-success text-uppercase mb-5 font-weight-bold">Financial security at your fingertip</p>

                            <h1 className="h1   text-dark mb-4 font-weight-bold"> Faster, Secure and with lower rates than you can ever imagine...</h1>

                            <p className=" text-muted "> we are a financial organization that help bankers and other professionals (salary earners) with static salary date to acheive thier various desires and goals by providing a platfrom to access funds.</p>
                            <div className={" mt-2 "}>
                                <NavLink to="/dashboard/loan" className="text-success lead font-weight-bold  d-block " >Get A Loan <i className="ml-3 fa fa-long-arrow-right"></i></NavLink>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div className={`row  bg-light `} >
            <div className="col  h-100 ">
                <div className="row h-100 align-items-center ">
                <div className="col">
                        <div className={`  ml-auto p-5  ${aboutUs[0]}`}>
                            <p className="text-danger text-uppercase mb-5 font-weight-bold">Technology and Finance at its finest</p>

                            <h1 className="h1   text-dark mb-4 font-weight-bold"> We are here to guide and help you!</h1>

                            <p className=" text-muted "> leveraging latest technoloical advancemets in the fin-tech space, we are delighted to providing ease while doing business with you .</p>
                            
                        </div>

                    </div>

                    <div className="col ">
                        <div className={`text-left my-2 `}>

                            <img src={help} alt="secure transactions" className={"img-fluid rounded  " + aboutUs[1]} />
                        </div>

                    </div>

                </div>

            </div>
        </div>


        <BackToTop destination="#About" />
    </React.Fragment>)
}

export default AboutUsPage;