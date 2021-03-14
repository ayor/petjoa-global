import React, {useState, useEffect} from 'react';
import LoanDetail from './LoanDetail';
import { axiosInstance } from "../../axios-instance";

const LoanFeed = props => {
    const [showDetail, setShowDetail] = useState(false);
    const [loanFullDetail, setLoanFullDetail] = useState(props.loan);
    
    
    const btnHandler = async (loanID) => {
        try {
            
            if(!showDetail){
                
                const response = await axiosInstance({
                    method: 'GET',
                    url: '/loan/loan/' + loanID,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
    
                if (response) {
                    setLoanFullDetail(response.data.data);

                    setShowDetail(true);
                }

                return;
            }

            setShowDetail(false);
           
        } catch (error) {
console.log(error)
        }

    }
    return (<React.Fragment>
        <div className=" pt-2 "  >
            <p className="d-block"><span className="text-light">Request Date: </span>{new Date(props.loan.createdAt).toLocaleDateString()}</p>
            <p className="text-capitalize" ><span className="text-light">loan Type: </span> {props.loan.type} </p>
            {/* <p className="text-right "><span className="text-light">Amount Requested: </span></p> */}
            <div className="text-right my-2">
                <button className="btn btn-info" onClick={btnHandler.bind(this, props.loan._id )}>NGN {parseInt(props.loan.amount).toFixed(2)} <i className="fa fa-chevron-down ml-2"></i></button>
            </div>
        </div>
        <div style={{
            display: showDetail ? "block" : "none"
        }}>
        <LoanDetail loan={loanFullDetail}/>

        </div>
    </React.Fragment>)

}

export default LoanFeed;