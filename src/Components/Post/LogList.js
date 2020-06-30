import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class LogList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    log_list: [
      {
        logID: 1,
        title: "Weding Jewllery log",
        condition: "new/used",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "active",
        price: 800,
        created: "4/2/2020",
        bidding: {
          start_price: 400,
          hours: "1",
          min: "1",
          max_bid_price: "600"
        },
        Images: 4,
        video: 1,
        Youtub_url: "",
        Image: "https://www.nfcfenterprises.com/wp-content/uploads/2017/11/platinum-log.png",
        UserDetails: {
          name: "Seller 1",
          ContactNo: [
            {
              name: "whats",
              Mo: -2589,
              Flag: true
            },
            {
              name: "Chat",
              Mo: -2589,
              Flag: true

            }, {
              name: "whats",
              Mo: -2589,
              Flag: true


            }
          ]
        }
      },
      {
        logID: 2,
        title: "Weding Jewllery log",
        condition: "new/used",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "active",
        price: 800,
        created: "4/2/2020",
        bidding: {
          start_price: 400,
          hours: "1",
          min: "1",
          max_bid_price: "600"
        },
        Images: 4,
        video: 1,
        Youtub_url: "",
        Image: "https://www.nfcfenterprises.com/wp-content/uploads/2017/11/platinum-log.png",
        UserDetails: {
          name: "Seller 1",
          ContactNo: [
            {
              name: "whats",
              Mo: -2589,
              Flag: true
            },
            {
              name: "Chat",
              Mo: -2589,
              Flag: true

            }, {
              name: "whats",
              Mo: -2589,
              Flag: true


            }
          ]
        }
      }
    ],
    language_data: [
      {
        language_id: "1",
        language_title: "English",
        language_code: "EN"
      },
      {
        language_id: "2",
        language_title: "Arabic",
        language_code: "AR"
      },
    ]
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
        name: "logID",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (logID, tableMeta) => {
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
        name: "Time Stamp",
        label: "Title",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "UserDetails",
        label: "Seller Name",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (UserDetails, tableMeta) => {
            console.log(tableMeta)
            return (
              UserDetails.name
            );
          }
        }
      },
      {
        name: "created",
        label: "loging Date",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "price",
        label: "Price",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "bidding",
        label: "Starting Price",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (bidding, tableMeta) => {
            console.log(tableMeta)
            return (
              bidding.start_price
            );
          }
        }
      }, {
        name: "bidding",
        label: "Maximum Price",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (bidding, tableMeta) => {
            console.log(tableMeta)
            return (
              bidding.max_bid_price
            );
          }
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
              
              </div>
            );
          }
        }
      },
      {
        name: "logID",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: logID => {
            return (
              <div>
                {" "}
              

             
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
                      <div className="card-header">
                        <h5>log List</h5>
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
                            data={this.state.log_list}
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

export default LogList;
