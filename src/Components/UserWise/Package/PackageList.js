import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class PackageList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    package_list: [
      {
        packageID: 1,
        date: "22/2/2020",
        name: "Platinum package",
        status: "active",
        price: 9.99,
        Coins: 9000,
        Duration: 30,
        refreals: 300,
        Image: "https://www.nfcfenterprises.com/wp-content/uploads/2017/11/platinum-package.png"

      },
      {
        packageID: 2,
        name: "Gold-package",
        status: "active",
        price: 5.99,
        date: "20/2/2020",
        Coins: 5000,
        Duration: 20,
        refreals: 200,
        Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-Package.jpg"
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
    let newArray = this.state.package_list;
    var a = newArray.find((element) => {
      return element.packageID === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ package_list: newArray })
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

        Swal.fire("Deleted!", "Package has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  goBackPage = (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  render() {
    const columns = [
      {
        name: "packageID",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (packageID, tableMeta) => {
           
            return (
              <div>
                #{tableMeta.rowIndex + 1}
              </div>
            );
          }
        }
      },
      {
        name: "date",
        label: "Order Date",
        options: {
          filter: true,
          sort: true
        }

      },
      {
        name: "name",
        label: "Package Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "price",
        label: "Package Price",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Coins",
        label: "Coins",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "refreals",
        label: "Total Refreals",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Duration",
        label: "Total Day",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "Duration",
        label: "Remaining Day",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "packageID",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (packageID, tableMeta) => {
       
            return (
              <Link
                to={"/packageOrder/" + hashids.encode(packageID)}
                className="m-r-15 text-muted"
                data-toggle="tooltip"
                data-placement="users" title=""
                data-original-title="Edit">
                <i className="f-20 icofont icofont-eye-alt text-facebook"></i>
              </Link>
            );
          }
        }
      },

    ];
    const options = {
      download: false,
      print: false,
      filter: false,
      selectableRowsHeader: false,
      search: false,
      selectableRows: false,
      selectableRowsOnClick: false,
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
                                <h5>Purchase Package</h5>
                                <button
                                  onClick={this.goBackPage}
                                  className="btn btn-outline-secondary btn-sm d-inline-block f-right" >
                                  <i class="icofont icofont-rounded-double-left"></i> Back
                       </button>
                              </div>
                            }
                            data={this.state.package_list}
                            columns={columns}
                            options={options}
                          />

                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default PackageList;
