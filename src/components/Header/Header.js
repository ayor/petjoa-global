import React from 'react';
import { withRouter } from 'react-router-dom';
import headerImage from '../../assets/6381.jpg';
import headerClass from './Header.module.css';

const Header = (props) => {
  // const btnHandler =()=> {
  //     if(props.auth){
  //         props.history.push('/dashboard/summary');
  //     }

  //     props.history.push('/auth');

  // }

  const encryptBtnHandler = () => {
    props.history.push('/encrypt');
  };
  return (
    <React.Fragment>
      <div className="row vh-100" id="home">
        <div className="col h-100 d-flex ">
          <div className="row h-100 align-items-center">
            <div className="col ">
              <div className=" p-5 text-left">
                <div className={'  ' + headerClass.HeaderText}>
                  <p className="display-4   text-capitalize  text-success font-weight-bold">
                    <span className="text-success">KEY POLICY </span>
                    <span className="text-muted">
                      ATTRIBUTE BASED ENCRYPTION
                    </span>
                  </p>
                  <h3 className="  text-muted font-weight-bold">
                    {' '}
                    A SAAS Access Control for CSP Providers
                  </h3>
                </div>
                <div className={' mt-5 ' + headerClass.Banner}>
                  <button
                    // onClick={btnHandler}
                    onClick={encryptBtnHandler}
                    className="btn btn-success p-3 d-block "
                  >
                    Run a test <i className="ml-3 fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={headerImage} className="img-fluid " alt="finance img" />
            </div>
          </div>
          {/* <div className="w-50 align-self-top">
                   
                </div>
                <div className="w-50">
                   

                </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Header);
