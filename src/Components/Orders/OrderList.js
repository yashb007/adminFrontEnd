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


class OrderList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    order_list: [
      {
        orderID: 1,
        orderCode: "01op0",
        orderStatusID: "1",
        orderStatus: "Accepted",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        payment: "KNET",
        totalAmount: 500,
        deliveryCharges: "50",
        discount: "50",
        OrderTotal: "500",
        Products: [
          {
            name: "New Sunglasses police imported directly from the italy",
            price: "15.000 KWD",
            Attribute: "Size-M",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          },
          {
            name: "Book 1",
            price: "15.000 KWD",
            Attribute: "PART-1",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          }
        ] },
      {
        orderID: 2,
        orderCode: "01op0",
        orderStatusID: "2",
        orderStatus: "Dispatch",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        totalAmount: 500,
        deliveryCharges: "50",
        discount: "50",
        payment: "KNET",
        OrderTotal: "500",
        Products: [
          {
            name: "New Sunglasses police imported directly from the italy",
            price: "15.000 KWD",
            Attribute: "Size-M",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          },
          {
            name: "Book 1",
            price: "15.000 KWD",
            Attribute: "PART-1",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          }
        ]

      },
      {
        orderID: 3,
        orderCode: "01op0",
        orderStatusID: "3",
        orderStatus: "Delivered",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        totalAmount: 500,
        payment: "Card",
        deliveryCharges: "50",
        discount: "50",
        OrderTotal: "500",
        Products: [
          {
            name: "New Sunglasses police imported directly from the italy",
            price: "15.000 KWD",
            Attribute: "Size-M",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          },
          {
            name: "Book 1",
            price: "15.000 KWD",
            Attribute: "PART-1",
            Quantity: 2,
            Products: [
              {
                name: "New Sunglasses police imported directly from the italy",
                price: "15.000 KWD",
                Attribute: "Size-M",
                Quantity: 2,
                Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
              },
              {
                name: "Book 1",
                price: "15.000 KWD",
                Attribute: "PART-1",
                Quantity: 2,
                Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
              }
            ] }
        ] },
      {
        orderID: 4,
        orderCode: "01op0",
        orderStatusID: "5",
        orderStatus: "Pending",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        totalAmount: 500,
        payment: "cash",
        deliveryCharges: "50",
        discount: "50",
        OrderTotal: "500",
        Products: [
          {
            name: "New Sunglasses police imported directly from the italy",
            price: "15.000 KWD",
            Attribute: "Size-M",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          },
          {
            name: "Book 1",
            price: "15.000 KWD",
            Attribute: "PART-1",
            Quantity: 2,
            Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-order.jpg"
          }
        ] },
    ],  
  }  
  goBackPage = (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  componentWillMount() {
    if (this.props.match.params.user_id !== undefined &&
      this.props.match.params.user_id !== null &&
      this.props.match.params.user_id !== 0 &&
      this.props.match.params.user_id !== '') {
      var decode_id = hashids.decode(this.props.match.params.user_id)
      this.setState({ user_id: decode_id[0] })
      console.log(this.props.match.params.user_id)
    }
  }

  render() {
    const columns = [
      {
        name: "orderID",
        label: "Order No",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (gallaryID, tableMeta) => {
            return (
              <div>
                #{tableMeta.rowIndex + 1}
              </div>
            );
          }
        }
      },
      {
        name: "orderStatusID",
        label: "Order Status",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (orderStatusID, tableMeta) => {
            console.log(tableMeta.rowData)
            return (
              <div>
                {orderStatusID === "1" ?
                  <label class="badge bg-inverse">Accepted</label>
                  : orderStatusID === "2" ?
                    <label class="badge bg-warning">Dispatch</label>
                    : orderStatusID === "3" ?
                      <label class="badge bg-success">Delivered</label>
                      : orderStatusID === "5" ?
                        <label class="badge bg-danger">Pending</label>
                        : ""
                }
              </div>
            );

          }
        }
      },
      {
        name: "dateOfOrder",
        label: "Order Date",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "deliveryDate",
        label: "Delivery Date",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "payment",
        label: "Payment Method",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "totalAmount",
        label: "Total Amount",
        options: {
          filter: true,
          sort: true
        }
      }, {
        name: "deliveryCharges",
        label: "Delivery Charges",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "discount",
        label: "Discount",
        options: {
          filter: true,
          sort: true,

        }
      },
      {
        name: "OrderTotal",
        label: "Order Total",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "orderID",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: orderID => {
            return (
              <div>
                {" "}
                <Link to={"/Orders/view/" + hashids.encode(orderID)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-eye-alt text-facebook"></i>
                </Link>
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
                        <h5>Order List{this.props.match.params.user_id ? " [User:-" + this.state.user_id + "]" : ""}</h5>
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
                            data={this.state.order_list}
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

export default OrderList;
