import React from 'react';
import css_classes from "./AdminDashboard.module.css";
import loanSumm from '../../assets/loanSummary_total.png';
import loanSumm1 from '../../assets/loanSummary_loaned_amount.png';
import loanSumm2 from '../../assets/loanSummary_total_accured.png';


const AdminSummary = props => {
    const pendingLoans = props.loans.filter(loan=> loan.status === "PE");
    const overdueLoans = props.loans.filter(loan=> loan.status === "OW");
    const activeLoans = props.loans.filter(loan=> loan.status === "AC");

    return(<React.Fragment>
    <div className="container">
        <div className="row bg-light ">
            <div className="col">
            <div className="row mt-5 p-2 text-center  text-dark" >
                <div className="col-12  col-md-4">
                    <div className={"card mb-3 " + css_classes.Card_Pending }>
                        <div className="card-header">
                            <p className="">Pending loans</p>

                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold">  {pendingLoans.length} </p>
                            <img className="img-fluid mx-auto" src={loanSumm} width="150" alt="summary" />
                        </div>
                    </div>

                </div>
                <div className="col-12  col-md-4">
                    <div className={"card mb-3 " + css_classes.Card_Active } >
                        <div className="card-header">

                            <p className="">Active Loans</p>

                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold"> {activeLoans.length} </p>
                            <img className="img-fluid mx-auto" src={loanSumm1} width="150" alt="summary" />
                        </div>
                    </div>
                </div>
                <div className="col-12  col-md-4">
                    <div className={"card mb-3 " + css_classes.Card_Overdue } >
                        <div className="card-header">
                            <p className="">Overdue Loans</p>
                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold"> {overdueLoans.length}</p>
                            <img className="img-fluid mx-auto" src={loanSumm2} width="150" alt="summary" />
                        </div>
                    </div>
                </div>
            </div>
       
            </div>
        </div>
    </div>
</React.Fragment>)};

export default AdminSummary;