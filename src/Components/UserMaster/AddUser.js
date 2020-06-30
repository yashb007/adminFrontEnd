import React from 'react';
import { Link } from 'react-router-dom'
import Constant from "../../Common/Constant"

class AddUser extends React.Component {
  state = {}
  onHandleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSaveUserData = (event) => {
    if (this.props.match.params.user_id !== undefined) {
      alert("User Data Updated");
    } else {
      alert("User Data Added");
    }
    this.props.history.goBack()
  }
  render() {
    return (
      <div class="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div class="page-header">
                <div class="row align-items-end">
                  <div class="col-lg-8">
                    <div class="page-header-title">
                      <div class="d-inline">
                        <h4>Add User</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="page-header-breadcrumb">
                      <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                          <Link to="/">
                            <i class="feather icon-home"></i>
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/users"> Users List
                          </Link>
                        </li>
                        <li class="breadcrumb-item active">
                          Add User
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-body">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      {/* <div class="card-header">
                        <h5>Add User</h5>
                      </div> */}
                      <div class="card-block">
                        <div class="row">
                          <div class="col-md-12">
                            <fieldset>
                              <div class="form-group row">
                                <div class="col-md-4 col-lg-2">
                                  <label for="userName-2" class="block">User name *</label>
                                </div>
                                <div class="col-md-8 col-lg-10">
                                  <input id="userName-2" name="userName" type="text" class="required form-control" onChange={this.onHandleInputChange} />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-4 col-lg-2">
                                  <label for="email-2" class="block">Email *</label>
                                </div>
                                <div class="col-md-8 col-lg-10">
                                  <input id="email-2" name="email" type="email" class="required form-control" onChange={this.onHandleInputChange} />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-4 col-lg-2">
                                  <label for="email-2" class="block">Date of Birth *</label>
                                </div>
                                <div class="col-md-8 col-lg-10">
                                  <input type="date" name="birthdate" class="form-control" defalutValue="" onChange={this.onHandleInputChange} />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-4 col-lg-2">
                                  <label for="password" class="block">Password *</label>
                                </div>
                                <div class="col-md-8 col-lg-10">
                                  <input id="password" name="password" type="password" class="form-control required" onChange={this.onHandleInputChange} />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-4 col-lg-2">
                                  <label for="confirm-password" class="block">Confirm Password *</label>
                                </div>
                                <div class="col-md-8 col-lg-10">
                                  <input id="confirm-password" name="confirm" type="password" class="form-control required" onChange={this.onHandleInputChange} />
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row">
                          <div className="text-right col-6 offset-6">
                            <Link to="/users" class="btn btn-outline-secondary">
                              <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                            <button class="btn hor-grd btn-grd-inverse offset-1" onClick={this.onSaveUserData}> <i class="ti-save"></i> Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default AddUser;
