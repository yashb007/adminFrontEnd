import React from 'react';
import { Link } from 'react-router-dom'
import Constant from "../../Common/Constant"

class UsersWalletDetails extends React.Component {
  state = {
    transaction_list: [{
      transaction_id: "1235TR123",
      transaction_type: "deduction",
      transaction_comment: "On Purchase of 50 Referal",
      transaction_date: "02/11/2019",
      transaction_amt: "25"
    }, {
      transaction_id: "456TR12",
      transaction_type: "deduction",
      transaction_comment: "On Purchase of 50 Referal",
      transaction_date: "02/10/2019",
      transaction_amt: "25"
    }, {
      transaction_id: "456TR12fa",
      transaction_type: "add",
      transaction_comment: "On Ad View of 50 Points",
      transaction_date: "02/10/2019",
      transaction_amt: "500"
    }],
    total_balance: "3200",
    viewTransactions: false
  }
  componentWillMount() {
    Constant.DefaultLoadDataTable();
  }
  viewWalletDetails = (event) => {
    this.setState({ viewTransactions: !this.state.viewTransactions });
  }
  goBackPage = (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  render() {
    return (
      <div class="pcoded-content">
        <div class="pcoded-inner-content">
          <div class="main-body">
            <div class="page-wrapper">
              <div class="page-header">
                <div class="row align-items-end">
                  <div class="col-lg-8">
                    <div class="page-header-title">
                      <div class="d-inline">
                        <h4>Wallet Details</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="page-header-breadcrumb">
                      <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                          <Link to="/"> <i class="feather icon-home"></i>
                          </Link>
                        </li>
                        <li class="breadcrumb-item" style={{ "cursor": "pointer" }} onClick={this.goBackPage}>Users List</li>
                        <li class="breadcrumb-item active">Wallet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-body">
                <div class="row">
                  <div class="col-md-12 col-lg-4">
                    <div class="card">
                      <div class="card-block text-center">
                        <div class="row align-items-center m-l-0">
                          <div class="col-auto">
                            <i class="icofont icofont-wallet f-30 text-c-lite-green"></i>
                          </div>
                          <div class="col-auto">
                            <h6 class="text-muted m-b-10">Wallet Balance</h6>
                            <h2 class="m-b-0">{this.state.total_balance}</h2>
                            <button class="btn btn-primary btn-sm btn-round" onClick={this.viewWalletDetails}>View Transactions</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  this.state.viewTransactions
                    ?
                    <div className="card">
                      <div className="card-header">
                        <h5>Transactions</h5>
                      </div>
                      <div className="card-block">
                        <div className="dt-responsive table-responsive">
                          <table id="basic-key-table" className="table table-striped table-bordered nowrap">
                            <thead>
                              <tr>
                                <th>#ID</th>
                                <th>Date</th>
                                <th>Transation Type</th>
                                <th>Transation Details</th>
                                <th>Comment</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody >
                              {this.state.transaction_list !== undefined &&
                                this.state.transaction_list !== null &&
                                this.state.transaction_list !== [] &&
                                this.state.transaction_list.length > 0 ? (
                                  this.state.transaction_list.map(transactions => (
                                    <tr key={transactions.transaction_id}>
                                      <td>#{transactions.transaction_id}</td>
                                      <td>{transactions.transaction_date}</td>
                                      <td>{transactions.transaction_type}</td>
                                      <td>{"-"}</td>
                                      <td>{transactions.transaction_comment}</td>
                                      <td>
                                        {transactions.transaction_type === "add"
                                          ?
                                          " + " + transactions.transaction_amt
                                          :
                                          " - " + transactions.transaction_amt
                                        }</td>
                                    </tr>
                                  ))) :
                                null
                              }
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#ID</th>
                                <th>Date</th>
                                <th>Transation Type</th>
                                <th>Transation Details</th>
                                <th>Comment</th>
                                <th>Amount</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersWalletDetails;
