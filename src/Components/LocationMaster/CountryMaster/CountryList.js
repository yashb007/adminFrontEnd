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


class TopUpList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    country_list: [
      {
        country_id: 1,
        country_name: "India",
        status: "active",
      },
      {
        country_id: 2,
        country_name: "Kuwait",
        status: "active",
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
    let newArray = this.state.country_list;
    var a = newArray.find((element) => {
      return element.country_id === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ country_list: newArray })
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

        Swal.fire("Deleted!", "Country has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {
    const columns = [
      {
        name: "country_id",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (country_id, tableMeta) => {
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
        name: "country_name",
        label: "country_name",
        options: {
          filter: true,
          sort: true,
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
        name: "country_id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: country_id => {
            return (
              <div>
                {" "}
                <Link to={"/country/edit/" + hashids.encode(country_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletepackage.bind(this, country_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Delete">
                  <i className="f-20 icofont icofont-delete-alt text-danger"></i>
                </span>

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

      textLabels: {
        body: {
          noMatch: "Sorry, No Products are Inwarded",
          toolTip: "Sort",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        },
      },
      onChangePage: (currentPage) => {
        console.log("Page Change to : ", currentPage);
        this.setState({ currentPage })
      },
      onChangeRowsPerPage: (numberOfRows) => {
        console.log("Total Rows Per Page Change to : ", numberOfRows)
        this.setState({ numberOfRows })
      }
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
                              <h5>Country List</h5>
                              <Link to="/country/add"
                                className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add Country
                             </Link>
                            </div>
                            }
                            data={this.state.country_list}
                            columns={columns}
                            options={options}
                          />


                      }</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default TopUpList;
