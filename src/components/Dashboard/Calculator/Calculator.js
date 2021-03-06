import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import calcClasses from './Calculator.module.css';
import Schedule from './schedule';
import { axiosInstance } from "../../../axios-instance";
import { useReactToPrint } from 'react-to-print';

const Calculator = (props) => {

    const [loanData, setLoanData] = useState({
        loanAmount: 0,
        duration: 6,
        type: "personal"
    });

    const [repayment, setRepayment] = useState({
        monthlyRate: "0.00",
        totalInterest: "0.00",
        total: "0.00"
    });

    const [paymentPeriod, setPaymentPeriod] = useState([]);

    const scheduleRef = useRef();

    const buildRepayment = (amount, interest, duration) => {

        const arr = new Array(duration);
        const repaymentPeriod = [];
        amount = amount / loanData['duration'];

        const total = amount + interest;

        arr.fill({
            date: "",
            amount,
            interest,
            total
        });
        const newDate = new Date();
        //build the payment period
        arr.forEach((el) => {
            newDate.setDate(newDate.getDate() + 30);
            const _date = newDate.toLocaleDateString();

            repaymentPeriod.push({
                date: _date,
                amount: amount.toFixed(2),
                interest: interest.toFixed(2),
                total: total.toFixed(2),
            })
        });

        return repaymentPeriod;
    }

    const handleAmount = (event) => {
        const amount = event.target.value;
        if (amount < 0) {
            return;
        };

        const rate = 5.5 / 100;
        const interest = (+amount * rate);
        const totalInterest = interest * loanData['duration'];
        const repaymentAmount = (amount / loanData['duration']) + interest;
        const total = repaymentAmount * loanData['duration'];
        const repaymentPeriod = buildRepayment(amount, interest, +loanData['duration']);

        //coverts value to currency format
        let txtRepayment = new Intl.NumberFormat().format(repaymentAmount.toFixed(2));
        let txtInterest = new Intl.NumberFormat().format(totalInterest.toFixed(2));
        let txtTotal = new Intl.NumberFormat().format(total.toFixed(2));

        setLoanData({ ...loanData, loanAmount: amount });
        setRepayment({ totalInterest: txtInterest, monthlyRate: txtRepayment, total: txtTotal });
        setPaymentPeriod(repaymentPeriod);
    }

    const handleDuration = (event) => {
        const dur = event.target.value;
        const rate = 5.5 / 100;
        const interest = (+loanData['loanAmount'] * rate);
        const totalInterest = interest * dur;
        const repaymentAmount = (+loanData['loanAmount'] / dur) + interest;
        const total = repaymentAmount * dur;
        const repaymentPeriod = buildRepayment(+loanData['loanAmount'], interest, +dur);


        //coverts value to currency format
        let txtRepayment = new Intl.NumberFormat().format(repaymentAmount.toFixed(2));
        let txtInterest = new Intl.NumberFormat().format(totalInterest.toFixed(2));
        let txtTotal = new Intl.NumberFormat().format(total.toFixed(2));

        setLoanData({ ...loanData, duration: dur });
        setRepayment({ totalInterest: txtInterest, monthlyRate: txtRepayment, total: txtTotal });
        setPaymentPeriod(repaymentPeriod);
    }

    const handleClearBtn = () => {
        setLoanData({
            loanAmount: 0,
            duration: 6,
        });
        setRepayment({
            monthlyRate: "0.00",
            totalInterest: "0.00",
            total: "0.00"
        })
    }

    const printScheduleHandler = useReactToPrint({
        content: () => (scheduleRef.current),
        documentTitle: `Schedule_ ${new Date().toISOString()}`
    });

    const loanTypeHandler = async (event) => {

        const loan_type = event.target.value;

        setLoanData({ ...loanData, type: loan_type })

    };
    const getLoanHandler = async () => {
        const newLoan = {
            ...loanData
        };
        const token = localStorage.getItem('token');
        const response = await axiosInstance('/loan/new_loan', {
            data: newLoan,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
console.log(response)
        setLoanData({
            loanAmount: 0,
            duration: 6,
        });
        setRepayment({
            monthlyRate: "0.00",
            totalInterest: "0.00",
            total: "0.00"
        })
    }

    return (<React.Fragment>

        <div className={`row vh-100 mt-3`}>
            <div className="col h-75 d-flex align-items-center  ">

                <form className={"p-5  align-self-center text-light " + calcClasses.Calculator}>
                    <h1 className=" text-light font-weight-bold">Loan Calculator</h1>

                    <p className="text-warning">Calculate and plan your repayment schdedule.<i className="fa fa-calculator ml-2 text-light"></i> </p>

                    <div className="row">

                        <div className=" col-6 my-2 ">
                            <label >Amount </label>
                            <input type="number" step="0.01" className="form-control " placeholder="Loan Amount" value={loanData.loanAmount} onChange={handleAmount} />
                        </div>
                        <div className=" col-6 my-2  ">
                            <label >Duration </label>

                            <input type="number" className="form-control" placeholder="Number of Months" value={loanData.duration} onChange={handleDuration} />
                        </div>
                        <div className=" col-6 my-2 ">
                            <label >Rate </label>

                            <input type="number" step="0.01" className="form-control" value="5.5" readOnly />
                        </div>
                        <div className="col-6 my-2 ">
                            <label >Loan Type </label>

                            <select className="custom-select custom-select-sm" onChange={loanTypeHandler}>

                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="enterprise">Enterprise</option>
                            </select>
                        </div>

                        <div className=" border-top pt-2 col-6 my-2 ">
                            <label className="">Monthly Rate</label>
                            <input type="text" step="0.01" className="form-control " disabled placeholder="Loan Amount" value={repayment.monthlyRate} readOnly />
                        </div>
                        <div className=" border-top pt-2 col-6 my-2  ">
                            <label className="">Total Interest</label>
                            <input type="text" className="form-control" disabled placeholder="Number of Months" value={repayment.totalInterest} readOnly />
                        </div>
                        <div className=" col-6 my-2 ">
                            <label>Total </label>
                            <input type="text" step="0.01" className="form-control" disabled value={repayment.total} readOnly />
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-dark col  mr-2 mt-2" onClick={handleClearBtn}>Clear</button>
                        <button type="button" className="btn btn-dark col mr-2 mt-2" onClick={printScheduleHandler}>Print Schedule</button>
                        <button type="button" className="btn btn-dark col  mt-2" onClick={getLoanHandler}>Get Loan</button>
                    </div>

                </form>
                <div style={{ display: "none" }}>
                    <Schedule ref={scheduleRef} paymentSchedule={paymentPeriod} loanData={loanData} />

                </div>
            </div>
        </div>
    </React.Fragment >)
};

export default withRouter(Calculator); 