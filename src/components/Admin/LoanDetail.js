import React from 'react';
import css_classes from "./AdminDashboard.module.css";

const LoanDetail = props => {


    return(<div className={" p-3 text-light "+ css_classes.LoanDetail}  >
    <p className="d-block"><span className="text-light">Requested By: </span>{props.loan.user.firstname }</p>
    <p className="text-capitalize" ><span className="text-light">Loan Type: </span> {props.loan.type} </p>
    <p className="text-capitalize" ><span className="text-light">Duration: </span> {props.loan.duration} </p>
    <div className="text-right my-2">
                <button className="btn btn-success " >Approve</button>
                <button className="btn btn-danger ml-3" >Deny</button>
            </div>
    
</div>)}

export default LoanDetail;