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


class AreaList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    area_list: [
      {
        area_id: 1,
        area_name: "Hawally",
        area_code: 12,
        pincode: "123131",
        status: "active",
      },
      {
        area_id: 2,
        area_name: "Mishref",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 3,
        area_name: "Jabriya",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 4,
        area_name: "Salmiya",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 5,
        area_name: "Jahra - Al Naeem	",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 6,
        area_name: "Jahra - Jahra Area",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 7,
        area_name: "Faiha",
        area_code: 12,
        pincode: "123131",
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
    let newArray = this.state.area_list;
    var a = newArray.find((element) => {
      return element.area_id === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ area_list: newArray })
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

        Swal.fire("Deleted!", "Area has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {
    const columns = [
      {
        name: "postID",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (postID, tableMeta) => {
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
        name: "area_name",
        label: "Area Name",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "area_code",
        label: "Area Code",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "pincode",
        label: "Pincode",
        options: {
          filter: true,
          sort: true,
        }
      }, {
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
        name: "area_id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: area_id => {
            return (
              <div>
                {" "}
                <Link to={"/area/edit/" + hashids.encode(area_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletepackage.bind(this, area_id)}
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
                                <h5>Area List</h5>
                                <Link to="/area/add"
                                  className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add area
                             </Link>
                              </div>
                            }
                            data={this.state.area_list}
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

export default AreaList;
