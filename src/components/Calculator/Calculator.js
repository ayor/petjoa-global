import React, { useState } from 'react';
import calcClasses from './Calculator.module.css'

const Calculator = () => {

    const [loanData, setLoanData] = useState({
        loanAmount: 0,
        duration: 6,
    });

    const [repayment, setRepayment] = useState({
        monthlyRate: "0.00",
        totalInterest: "0.00",
        total: "0.00"
    });




    const handleAmount = (event) => {
        const amount = event.target.value;
        const rate = 5.5 / 100;
        const interest = (+amount * rate);
        const totalInterest = interest * loanData['duration'];
        const repaymentAmount = (amount / loanData['duration']);
        const total = +amount + totalInterest;

        let txtRepayment = new Intl.NumberFormat().format(repaymentAmount.toFixed(2));
        let txtInterest = new Intl.NumberFormat().format(totalInterest.toFixed(2));
        let txtTotal = new Intl.NumberFormat().format(total.toFixed(2));

        setLoanData({ ...loanData, loanAmount: amount });
        setRepayment({ totalInterest: txtInterest, monthlyRate: txtRepayment, total: txtTotal });
    }

    const handleDuration = (event) => {
        const dur = event.target.value;
        if(dur < 1 || dur > 12){
            return;
        }
        const rate = 5.5 / 100;
        const interest = (+loanData['loanAmount'] * rate);
        const totalInterest = interest * dur;
        const repaymentAmount = (+loanData['loanAmount'] / dur);
        const total = +loanData['loanAmount'] + totalInterest;

        let txtRepayment = new Intl.NumberFormat().format(repaymentAmount.toFixed(2));
        let txtInterest = new Intl.NumberFormat().format(totalInterest.toFixed(2));
        let txtTotal = new Intl.NumberFormat().format(total.toFixed(2));

        setLoanData({ ...loanData, duration: dur });
        setRepayment({ totalInterest: txtInterest, monthlyRate: txtRepayment, total: txtTotal });
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

    return (<React.Fragment>
        <div className={`row vh-100 ${calcClasses.CalculatorHeader}`}>
            <div className="col h-100 d-flex flex-lg-row flex-column  justify-content-around  ">
                <div className="align-self-top text-lg-left text-center p-5 mt-5 ">
                    <p className="display-4 text-light font-weight-bold">Loan Calculator</p>
                    <p className="text-light h4">Calculate and plan your repayment schdedule before hand. </p>

                </div>
                <div className={"p-5 row align-self-center text-light " + calcClasses.Calculator}>
                    <div className="col">
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

                                <input type="number" step="0.01" className="form-control" value="5.5" />
                            </div>
                            <div className="col-6 my-2 ">
                                <label >Payment Type </label>

                                <select className="custom-select custom-select-sm">
                                    <option selected></option>
                                    <option value="">End of Month</option>
                                    <option value="">Beginning of Month</option>
                                </select>
                            </div>

                            <div className=" border-top pt-2 col-6 my-2 ">
                                <lable className="">Monthly Rate</lable>
                                <input type="text" step="0.01" className="form-control " disabled placeholder="Loan Amount" value={repayment.monthlyRate} />
                            </div>
                            <div className=" border-top pt-2 col-6 my-2  ">
                                <lable className="">Total Interest</lable>
                                <input type="text" className="form-control" disabled placeholder="Number of Months" value={repayment.totalInterest} />
                            </div>
                            <div className=" col-6 my-2 ">
                                <label>Total </label>
                                <input type="text" step="0.01" className="form-control" disabled value={repayment.total} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                <button className="btn btn-dark w-50 mr-2 mt-2  " onClick={handleClearBtn}>Clear</button>
                                <button className="btn btn-dark w-50  mt-2" >Print Schedule</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </React.Fragment >)
};

export default Calculator; 