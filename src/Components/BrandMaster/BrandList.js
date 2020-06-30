import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import MUIDataTable from "mui-datatables";

import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'

import Hashids from 'hashids'
// import Constant from '../../Constant'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class BrandList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    brand_list: [
      {
        brandID: 1,
        name: "20% Discount",
        status: "active",
        Discount: "20",
        Validity: 90,
        Image: "https://cdn.pixabay.com/photo/2014/10/11/09/17/bargain-484372__340.png"

      },
      {
        brandID: 2,
        name: "10% Discount",
        status: "active",
        Discount: "10",
        Validity: 50,
        Image: "https://cdn.pixabay.com/photo/2014/10/11/09/17/bargain-484372__340.png"
      }, {
        brandID: 3,
        name: "Discount on Jewllwey",
        status: "active",
        Discount: "100",
        Validity: 30,
        Image: "https://cdn.pixabay.com/photo/2014/10/11/09/17/bargain-484372__340.png"
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
  handleStatusChange = (sid) => {
    var isChecked = $('#cattogBtn_' + sid);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.brand_list;
    var a = newArray.find((element) => {
      return element.brandID === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ brand_list: newArray })
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

        Swal.fire("Deleted!", "brand has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {

    const columns = [
      {
        name: "brandID",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (brandID, tableMeta) => {
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
        name: "Image",
        label: "Image",
        options: {
          filter: true,
          sort: true,
          customBodyRender: Image => {
            return (
              <div>
                {" "}
                <img src={Image !== null && Image !== "" ? Image : './images/thumbnail.jpg'} alt="" className="img-fluid img-40" />
              </div>
            );
          }
        }
      },
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "Discount",
        label: "Discount",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "Validity",
        label: "Validity",
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
        name: "brandID",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: brandID => {
            return (
              <div>
                <Link to={"/brand/edit/" + hashids.encode(brandID)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletepackage.bind(this, brandID)}
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

                      {
                        this.state.isloading ?
                          ""
                          :
                          <MUIDataTable
                            title={
                              <div className="card-header">
                                <h5>Brand List</h5>
                                <Link to="/brand/add"
                                  className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add Brand
                             </Link>
                              </div>
                            }
                            data={this.state.brand_list}
                            columns={columns}
                            options={options}
                          />

                      }</div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </div >);
  }
}

export default BrandList;
