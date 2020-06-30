import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
// import Constant from '../../Constant'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class AddressList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    Address_data: [
      {
        address_id: "1",
        addressTitle: "Home Address",
        Govenorate: "Kuwait City	",
        area: "Kuwait City	",
        block: "",
        street: "",
        avenue: "",
        houseno: "",
        direction: "",
        Pincode: "435455",
        addtess_type: "House",
        Address_code: "EN",
        status: "active"
      },
      {
        address_id: "2",
        addressTitle: "Office Address",
        addtess_type: "Building",
        Address_code: "AR",
        Govenorate: "Al Jahra	",
        area: "Jahra - Al Naeem	",
        block: "",
        street: "",
        Pincode: "114242",
        avenue: "",
        building_number: "",
        floor_number: "",
        flat_number: "",
        direction: "",
        status: "active"
      },
      {
        address_id: "2",
        addressTitle: "Office",
        addtess_type: "Office",
        Address_code: "AR",
        Govenorate: "Al Ahmadi	",
        area: "Faiha",
        block: "",
        street: "",
        avenue: "",
        Pincode: "343533",
        building_number: "",
        floor_number: "",
        office_number: "",
        direction: "",
        status: "active"
      },
    ]
  }
  goBackPage = (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  handleStatusChange = (sid) => {
    var isChecked = $('#cattogBtn_' + sid);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.Address_data;
    var a = newArray.find((element) => {
      return element.address === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ Address_data: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  deletepackage = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this !",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {

        Swal.fire("Deleted!", "Address has been deleted.", "success");
      }
    });
  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {
    const columns = [
      {
        name: "address",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (address, tableMeta) => {
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
        name: "addressTitle",
        label: "Address Title",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Govenorate",
        label: "Govenorate",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "area",
        label: "Area",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "Pincode",
        label: "Pincode",
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
        name: "address_id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: address_id => {
            return (
              <div>
                {" "}
                <Link to={"/address/edit/" + hashids.encode(address_id) + "/" + this.props.match.params.user_id}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletepackage.bind(this, address_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Delete">
                  <i className="f-20 icofont icofont-delete-alt text-danger"></i>  </span>
              </div>
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
        <div class="pcoded-inner-content">
          <div class="main-body">
            <div class="page-wrapper">
              <div class="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                    <div className="card-header">
                                <h5>Address List</h5>
                                <button
                        onClick={this.goBackPage}
                        className="btn btn-outline-secondary btn-sm d-inline-block f-right" >
                        <i class="icofont icofont-rounded-double-left"></i> Back
                       </button>
                              </div>

                      {
                        this.state.isloading ?
                          ""
                          :
                          <MUIDataTable
                            title={
                              <div className="card-header">
                            
                                <Link to={"/address/add/" + this.props.match.params.user_id}
                                  className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add Address
                             </Link>
                              </div>
                            }
                            data={this.state.Address_data}
                            columns={columns}
                            options={options}
                          />


                      }</div>
                  </div>
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >);
  }
}

export default AddressList;
