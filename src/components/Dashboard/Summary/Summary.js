import React, { useState } from 'react';
import Totals from '../Totals/Totals';
import Details from '../Details/Details';
import History from '../History/History';
import DashboardClasses from '../Dashboard.module.css';
import { axiosInstance } from '../../../axios-instance';
const Summary = (props) => {

    const [user, setUser] = useState(props.user);

    const refreshHandler = async () => {
        const response = await axiosInstance.get('/user/user/'+user._id);
        setUser(response.data.data);
        
    }

    return (<React.Fragment >
        <div className={DashboardClasses.Summary}>
            <small className={"text-muted d-block text-right pr-3 " + DashboardClasses.Refresh} onClick={refreshHandler}>Refresh <i className="fa fa-refresh"></i></small>
            <Totals   user={user} />
            <Details user={user} />
            <History   user={user} />
        </div>

    </React.Fragment>)
};

export default Summary;