import React from 'react';
import calcClasses from './Calculator.module.css'

const Calculator = () => (<React.Fragment>
    <div className={`row vh-100 ${calcClasses.CalculatorHeader}`}>
        <div className="col h-100 d-flex flex-lg-row flex-column  justify-content-around  ">
            <div className="align-self-top text-lg-left text-center p-5 mt-5 ">
                <p className="display-4 text-light font-weight-bold">Loan Calculator</p>
                <p className="text-light h4">Calculate and plan your repayment schdedule before hand. </p>

            </div>
            <div className={"p-5 row align-self-center " + calcClasses.Calculator}>
                <div className="col">
                    <div className="row">

                        <div class="input-group col-6 my-2 ">
                            <input type="number" step="0.01" className="form-control " placeholder="Loan Amount" />
                        </div>
                        <div class="input-group col-6 my-2  ">
                            <input type="number" className="form-control" placeholder="Number of Months" />
                        </div>
                        <div class="input-group col-6 my-2 ">
                            <input type="number" step="0.01" className="form-control" value="5.5" />
                        </div>
                        <div class="input-group col-6 my-2 ">
                            <select className="custom-select custom-select-sm">
                                <option selected>Payment Method</option>
                                <option value="">End of Month</option>
                                <option value="">Beginning of Month</option>
                            </select>
                        </div>

                        <div class="input-group border-top pt-2 col-6 my-2 ">
                            <input type="number" step="0.01" className="form-control " disabled placeholder="Loan Amount" />
                        </div>
                        <div class="input-group border-top pt-2 col-6 my-2  ">
                            <input type="number" className="form-control" disabled placeholder="Number of Months" />
                        </div>
                        <div class="input-group col-6 my-2 ">
                            <input type="number" step="0.01" className="form-control" disabled value="5.5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-between">
                            <button className="btn btn-dark w-25 mt-2">Calc</button>
                            <button className="btn btn-dark w-25 mt-2  ">Clear</button>
                            <button className="btn btn-dark  mt-2">Print Schedule</button>
                        </div>
                    </div>
                .</div>

            </div>
        </div>
    </div>
</React.Fragment >);

export default Calculator; 