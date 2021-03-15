import React, { useState, useEffect } from 'react';
import LoanFeeds from "./LoanFeeds";
import BackToTop from '../BackToTop/BackToTop';
import AdminSummary from './AdminSummary';
import { axiosInstance } from '../../axios-instance';

const getLoans = async () => {

    const response = await axiosInstance({
        method: 'GET',
        url: '/loan/loans',
        headers: {
            'Authorization': " Bearer " + localStorage.getItem('token')
        }
    });

    return response;
}

const Dashboard = (props) => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        getLoans()
            .then(response => {
                setLoans(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, [])
    return (<React.Fragment>
        <div className="container">
            <div className="row vh-100">
                <div className={"col-12 col-md-12 h-100 col-lg-12 mt-lg-5 text-light "} id="admindashboard">
                    <AdminSummary loans={loans} />
                    <LoanFeeds loans={loans} />

            </div>
                <BackToTop destination="#dashboard" />
            </div >
        </div>

    </React.Fragment >)
}


export default Dashboard;