import React from 'react';
import css_classes from "./AdminDashboard.module.css";
import LoanFeed from "./LoanFeed";
// import socketIOClient from 'socket.io-client';



const LoanFeeds = props => {

  let loans = null;

  if(props.loans.length){
    loans = props.loans.map(loan => (<li key={loan._id} className="list-item my-1 border-bottom  ">
    <LoanFeed loan={loan} />
  </li>)
  )
  }

  return (
    <React.Fragment>
      <div className="row mt-lg-3 mt-md-2  p-2 text-light  ">
        <div className={" col-12 "}>
          <div className={" card text-dark " + css_classes.Card_Pending}>
            <div className="card-header">
              <div className="card-title">
                <p className="h4">Loan Feeds </p>
                <small >Information about all loan requests and payment</small> <i className="fa fa-rss text-muted"></i>
              </div>
            </div>
            <div className="card-body p-3">
              <ul className="list-unstyled">{loans}</ul>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoanFeeds;