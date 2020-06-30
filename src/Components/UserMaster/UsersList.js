import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import Constant from "../../Common/Constant"
import Switch from "react-switch";
import MUIDataTable from "mui-datatables";
import Swal from 'sweetalert2'

import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class UsersList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    users_list: [
      {
        uid: 1,
        user_Name: "User 1",
        price: "100,00",
        duration: "7 Day",
        status: "active",
        email: "user_1@gmail.com",
        PhoneNo: "7878747850",
        post: "2",
        bidding: "11",
        is_verified: true,
        is_seller: false,
        WhatsAppNo: "7878747850",
        usersImage: "./files/assets/images/avatar-3.jpg"
      },
      {
        uid: 2,
        user_Name: "USer 2 ",
        price: "100,00",
        duration: "7 Day",
        post: "5",
        bidding: "4",
        is_verified: false,
        is_seller: true,
        status: "active",
        email: "user_2@gmail.com",
        PhoneNo: "7878747850",
        WhatsAppNo: "7878747850",
        usersImage: "./files/assets/images/avatar-3.jpg"
      },
    ],
    language_data: [
      {
        language_id: "1",
        language_name: "English",
        language_code: "EN"
      },
      {
        language_id: "2",
        language_name: "Arabic",
        language_code: "AR"
      },
    ]
  }
  removeUser = (id) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You will not be able to recover this !",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, delete it!",
    //   cancelButtonText: "No, keep it"
    // }).then(result => {
    //   if (result.value) {
    //     // Swal.fire("Deleted!", "User has been deleted.", "success");
    //   }
    // });
    alert("User has been deleted");
  }
  handleStatusChange = (user) => {
    var isChecked = $('#icon-switch_' + user);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.users_list;
    var a = newArray.find((element) => {
      return element.uid == user
    })
    console.log(a)
    var status = "active"
    if (a.status === "active") {
      status = "inactive"
    } else {
      status = "active"
    }
    a.status = status;
    this.setState({ users_list: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  componentWillMount() {
    Constant.DefaultLoadDataTable();
  }
  render() {
    const columns = [
      {
        name: "uid",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (uid, tableMeta) => {
            console.log(tableMeta)
            return (
              <div>
                #{tableMeta.rowIndex + 1}
              </div>
            );
          }
        }
      },
      {
        name: "usersImage",
        label: "Image",
        options: {
          filter: true,
          sort: true,
          customBodyRender: usersImage => {
            return (
              <div>
                {" "}
                <img src={usersImage !== null && usersImage !== "" ? usersImage : './images/thumbnail.jpg'} alt="" className="img-fluid img-40" />
              </div>
            );
          }
        }
      },
      {
        name: "user_Name",
        label: "Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "PhoneNo",
        label: "PhoneNo",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "post",
        label: "Total Posts",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "bidding",
        label: "Total Bidding",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (status, tableMeta) => {
            console.log(tableMeta)
            return (
              <div>
                {" "}
                <Toggle
                  id={"cattogBtn_" + tableMeta.rowData[0]}
                  checked={status === 'inactive' ? false : true}
                  value={status}
                  onChange={this.handleStatusChange.bind(this, tableMeta.rowData[0])}
                />
              </div>
            );
          }
        }
      },
      {
        name: "uid",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: uid => {
            return (
              <div>
                {" "}
                <Link to={'/users/wallet/' + hashids.encode(uid)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Wallet">
                  <i class="f-26 icofont icofont-wallet text-success"></i>
                </Link>

                <Link to={'/users'}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Package">
                  <i class="f-26 icofont icofont-package text-viber"></i>
                  <label class="badge badge-primary badge-top-right">9</label>
                </Link>
                <Link to={'/users/orders/' + hashids.encode(uid)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Orders">
                  <i class="f-26 icofont icofont-cart text-amazon"></i>
                </Link>
                <Link to={"/address/" + hashids.encode(uid)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="address">
                  <i className="f-20 icofont icofont-id-card text-youtube"></i>
                </Link>

                <Link to={"/users/add/" + hashids.encode(uid)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>

                <span onClick={this.removeUser.bind(this, uid)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Delete">
                  <i className="f-20 icofont icofont-delete-alt text-danger"></i>
                </span></div>
            );
          }
        }
      },
    ];
    const options = {
      selectableRows: false,
      selectableRowsOnClick: false,
      filterType: "dropdown",
      viewColumns: false,
      page: this.state.currentPage,
      rowsPerPageOptions: [5, 10, 15, 50, 100],
      rowsPerPage: this.state.numberOfRows,
    }
    return (
      <div class="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <MUIDataTable
                      title={
                        <div className="card-header">
                          <h5>Users List</h5>
                          <Link to="/users/add"
                            className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add User
                       </Link>
                        </div>
                      }
                      data={this.state.users_list}
                      columns={columns}
                      options={options}
                    />
                  </div>
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >
    );
  }
}

export default UsersList;
