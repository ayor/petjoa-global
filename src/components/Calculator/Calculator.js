import React from 'react';
import calc from '../../assets/pexels-karolina-grabowska-4491441.jpg';
import calcClasses from './Calculator.module.css'

const Calculator = () => (<React.Fragment>
    <div className="row ">
        
        <div className="col d-flex justify-content-center my-5 py-5 align-items-center">
       
            <div className={`row w-75  mt-3 p-5 ${calcClasses.Form}`}>
            
                <div className="col-12 col-md-12 col-lg-6">
                    
                    <div className="form">
                        <div className="input-group  mb-2 ">
                            <label className="lead col-6 text-dark mr-4 font-weight-bold">Loan Amount</label>
                            <input type="number" className="form-control col-6" step="0.01" placeholder="150,000.00" />

                        </div>
                        <input type="range" min="50000" max="1000000" className="form-control w-75" />
                        <div className="input-group  my-2 ">
                            <label className="lead text-dark mr-4 font-weight-bold col-6">Tenure( Months )</label>
                            <input type="number" className="form-control col-6" step="0.01" placeholder="150,000.00" />

                        </div>
                        <input type="range" min="1" max="12" className="form-control w-75" />
                        <div className="input-group  my-2 ">
                            <label className="lead text-dark mr-4 font-weight-bold col-6">Annual Interest Rate %</label>
                            <input type="number" disabled className="form-control col-6" step="0.1" value="5.5" />

                        </div>
                        <input type="range" disabled className="form-control w-75" />
                    </div>
                   
           
        
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="input-group  mb-2 ">
                        <label className="lead col-6 text-dark mr-4 font-weight-bold">Monthly Repayment</label>
                        <input type="number" disabled className="form-control col-6" step="0.01" placeholder="150,000.00" />

                    </div>
                    <input type="range" min="50000" max="1000000" disabled className="form-control w-75" />
                    <div className="input-group  my-2 ">
                        <label className="lead text-dark mr-4 font-weight-bold col-6">Total Interest</label>
                        <input type="number" className="form-control col-6" disabled step="0.01" placeholder="150,000.00" />

                    </div>
                    <input type="range" min="1" max="12" disabled className="form-control w-75" />
                    <div className="input-group  my-2 ">
                        <label className="lead text-dark mr-4 font-weight-bold col-6">Total Principal {' & '}Interest</label>
                        <input type="number" disabled className="form-control col-6" step="0.01"  />

                    </div>
                    <input type="range" disabled className="form-control w-75" />
                    <button type="button" className="btn btn-info w-25 m-2">Calc</button>
                        <button type="button" className="btn btn-info w-25 m-2">Clear</button>
                        <button type="button" className="btn btn-danger w-25 m-2">Print</button>
       
                    <button type="button" className="btn btn-danger w-25 m-2">Help</button>
                        <button type="button" className="btn btn-danger  w-25 m-2">Charts</button>
                        <button type="button" className="btn btn-success m-2 w-25 ">Payment Schedule</button>
        
            </div>

        </div>
       
    </div>
    
    </div>
</React.Fragment >);

export default Calculator; 