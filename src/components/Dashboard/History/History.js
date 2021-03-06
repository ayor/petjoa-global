import React from 'react';
import DashboardClasses from '../Dashboard.module.css'

const Histroy = (props) => {

    const loans = props.user.loans;


    const statement = loans.map(loan => {
        let status;
        let amount = parseInt(loan.amount).toFixed(2);
        switch (loan.status) {
            case "PE":
                status = "Pending";
                break;
            case "CO":
                status = "Completed";
                break;
            case "AC":
                status = "Active";
                break;
            case "CR":
                status = "Credited";
                break;

            default:
                status = "Pending";
                break;
        }

        return (<li key={loan._id} className="list-item my-1 border-bottom  ">
            <div className="text-light pt-2">
                <small className="d-block">{new Date(loan.createdAt).toLocaleDateString()}</small>
                <small className="d-block mt-1">Status: {status}</small>
                <small className="text-capitalize" >Loan Type: {loan.type} </small>
                <p className="text-right  text-warning">NGN {amount}</p>
            </div>
        </li>)
    })

    return (<React.Fragment>

        <div className="row mt-lg-3 mt-md-2  p-2 text-light  ">
            <div className={" col-12 "}>

                <div className={"card mr-lg-2 " + DashboardClasses.Card}>
                    <div className="card-header">
                        <div className="card-title">
                            <p className="h4">Statement </p>
                            <small >Information about all your loans</small> <i className="fa fa-rss text-light"></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {loans.length === 0 ? <p className="text-center "> You currently have no loans</p> : statement}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </React.Fragment >)
}
export default Histroy;