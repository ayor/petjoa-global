import React, { PureComponent } from 'react';
import petjoaLogo from '../../../assets/petjoa.png';

class Schedule extends PureComponent {

    render() {
        return (<React.Fragment>

            <div className="row mt-5 pt-4"  >
                <div className="col p-5">
                    <header className="d-flex justify-content-between mb-2">
                        <img src={petjoaLogo} className="rounded-circle" width="35" alt="petjoa global's logo" />
                        <h2 className="lead">Petjoa Global</h2>
                    </header>
                    <div className=" lead p-2 text-right">
                        <small>Requested loan Amount of <span>{this.props.loanData['loanAmount']}</span> for <span> {this.props.loanData['duration']}</span> months </small>
                    </div>

                    <main>
                        <table className="table">
                            <thead className="table-header bg-success">
                                <tr>
                                    <th>Date</th>
                                    <th>Monthly Split</th>
                                    <th>Interest</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {this.props.paymentSchedule.map((period, ind) => {
                                    return (<tr key={ind}>
                                        <td>
                                            {period.date}
                                        </td>
                                        <td>
                                            {period.amount}
                                        </td>
                                        <td>
                                            {period.interest}
                                        </td>
                                        <td>
                                            {period.total}
                                        </td>
                                    </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </main>

                </div>
            </div>
        </React.Fragment>)
    }
}
    export default Schedule;