import React from 'react';
import Classes from './Sidedrawer.module.css';

const Backdrop = (props) => (<React.Fragment>
    <div className={Classes.Backdrop} onClick={props.clicked} >
        
    </div>  
</React.Fragment>);

export default Backdrop;