import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class ProductList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    product_list: [
      {
        product_id: 1,
        title: "Weding Jewllery product",
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
        Image: "https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg",
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
        product_id: 2,
        title: "Weding Jewllery product",
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
        Image: "https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg",
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
  handleStatusChange = (sid) => {
    var isChecked = $('#cattogBtn_' + sid);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.product_list;
    var a = newArray.find((element) => {
      return element.product_id === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ product_list: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  deleteproduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this !",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {

        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {
    const columns = [
      {
        name: "product_id",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (product_id, tableMeta) => {
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
        name: "title",
        label: "Name",
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
        name: "price",
        label: "Price",
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
        name: "product_id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: product_id => {
            return (
              <div>
                {" "}
                <Link to={"/product/edit/" + hashids.encode(product_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
              
                <Link to={"/product/gallary/" + hashids.encode(product_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="log history">
                  <i className="f-20 icofont icofont-ui-image text-facebook"></i>
                </Link>
                <span onClick={this.deleteproduct.bind(this, product_id)}
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
                                <h5>Product List</h5>
                                <Link
                                  to="/product/add"
                                  className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block md-trigger">
                                  <i className="icofont icofont-plus m-r-5"></i>
                                  Add Product
                                  </Link>
                              </div>
                            }
                            data={this.state.product_list}
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

export default ProductList;
