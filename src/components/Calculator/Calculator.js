import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import calcClasses from './Calculator.module.css';
import Schedule from './schedule';
import { useReactToPrint } from 'react-to-print';

const Calculator = (props) => {

    const [loanData, setLoanData] = useState({
        loanAmount: 0,
        duration: 6,
    });

    const [repayment, setRepayment] = useState({
        monthlyRate: "0.00",
        totalInterest: "0.00",
        total: "0.00"
    });

    const [paymentPeriod, setPaymentPeriod] = useState([]);

    const scheduleRef = useRef();

    const buildRepayment = (amount, interest, total, duration) => {

        const arr = new Array(duration);
        const repaymentPeriod = [];
        amount = amount / loanData['duration'];

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
        const repaymentPeriod = buildRepayment(amount, interest, repaymentAmount, +loanData['duration']);
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
        if (dur < 1 || dur > 12) {
            return;
        }
        const rate = 5.5 / 100;
        const interest = (+loanData['loanAmount'] * rate);
        const totalInterest = interest * dur;
        const repaymentAmount = (+loanData['loanAmount'] / dur) + interest;
        const total = repaymentAmount * dur;
        const repaymentPeriod = buildRepayment(+loanData['loanAmount'], interest, repaymentAmount, +dur);


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
        content:() => (scheduleRef.current),
        documentTitle:`Schedule_ ${new Date().toISOString()}`
    })

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
                                <label className="">Monthly Rate</label>
                                <input type="text" step="0.01" className="form-control " disabled placeholder="Loan Amount" value={repayment.monthlyRate} />
                            </div>
                            <div className=" border-top pt-2 col-6 my-2  ">
                                <label className="">Total Interest</label>
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
                                <button className="btn btn-dark w-50  mt-2" onClick={printScheduleHandler} >Print Schedule</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{display:"none"}}>
                <Schedule ref={scheduleRef} paymentSchedule={paymentPeriod} loanData={loanData} />

                </div>
            </div>
        </div>
    </React.Fragment >)
};

export default withRouter(Calculator); 