import React from 'react';
import calcClasses from './Calculator.module.css'

const Calculator = () => (<React.Fragment>
    <div className={`row vh-100 justify-content-center align-items-center ${calcClasses.Calculator}`}>
        <div className="col  ">
            <div className="banner_message text-center">
                <p className="display-2 text-light font-weight-bold ">Still under constuction...</p>
            </div>
        </div>
    </div>
</React.Fragment >);

export default Calculator; 