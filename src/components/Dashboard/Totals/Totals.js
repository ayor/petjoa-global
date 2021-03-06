import React from 'react';
import loanSumm from '../../../assets/loanSummary_total.png';
import loanSumm1 from '../../../assets/loanSummary_loaned_amount.png';
import loanSumm2 from '../../../assets/loanSummary_total_accured.png';
import DashboardClasses from '../Dashboard.module.css';

const Totals = props => {
    const loans = props.user.loans;

    let amount = 0;
    loans.forEach(loan => {
        amount += parseInt(loan.amount);
    });
    return (<React.Fragment>
        <div className={"border-bottom p-2 "} >
            <div className="row mt-lg-4 mt-md-3 mt-2 p-2 text-center  " >
                <div className="col-12  col-md-4">
                    <div className={"card  " + DashboardClasses.Card}>
                        <div className="card-header">
                            <p className="">Total loans</p>

                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold">  {props.user.loans.length}</p>
                            <img src={loanSumm} width="150" alt="summary" />
                        </div>
                    </div>

                </div>
                <div className="col-12  col-md-4">
                    <div className={"card " + DashboardClasses.Card}>
                        <div className="card-header">

                            <p className="">Loaned Amount</p>

                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold"> NGN {amount.toFixed(2)}</p>
                            <img src={loanSumm1} width="150" alt="summary" />
                        </div>
                    </div>
                </div>
                <div className="col-12  col-md-4">
                    <div className={"card " + DashboardClasses.Card}>
                        <div className="card-header">
                            <p className="">Total Paid</p>
                        </div>
                        <div className="card-body">
                            <p className=" font-weight-bold"> NGN 0.00</p>
                            <img src={loanSumm2} width="150" alt="summary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment >)
}


export default Totals;