import React from 'react';
import "react-toggle/style.css" // for ES6 modules
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class OrderView extends React.Component {
  state = {
    data: {
      Products: [{

      }],
    },
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
        totalAmount: "30.000 KWD",
        deliveryCharges: "1.000 KWD",
        discount: "15.000 KWD",
        OrderTotal: "30.000 KWD",
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
        orderID: 2,
        orderCode: "01op0",
        orderStatusID: "2",
        orderStatus: "Dispatch",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        totalAmount: "30.000 KWD",
        deliveryCharges: "1.000 KWD",
        discount: "15.000 KWD",
        payment: "KNET",
        OrderTotal: "30.000 KWD",
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
        totalAmount: "30.000 KWD",
        payment: "Card",
        deliveryCharges: "1.000 KWD",
        discount: "15.000 KWD",
        OrderTotal: "30.000 KWD",
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
            ]
          }
        ]
      },
      {
        orderID: 4,
        orderCode: "01op0",
        orderStatusID: "5",
        orderStatus: "Pending",
        transactionID: "74895",
        dateOfOrder: "4-8-2020",
        deliveryDate: "5-8-2020",
        totalAmount: "30.000 KWD",
        payment: "cash",
        deliveryCharges: "1.000 KWD",
        discount: "15.000 KWD",
        OrderTotal: "30.000 KWD",
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
    ],
  }
  goBackPage = (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  componentWillMount() {
    this.getDetails();

  }
  getDetails = () => {
    var decode_id = hashids.decode(this.props.match.params.order_id)
    var a = this.state.order_list.find((element) => {
      return element.orderID === decode_id[0];
    })
    console.log(a, decode_id[0])
    this.setState({
      data: a,
      order_id: decode_id[0]

    });
  }
  render() {

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
                        <h5>Order Details{this.props.match.params.order_id ? "  #" + this.state.order_id : ""}</h5>
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
                          <div class="container">
                            <div class="row invoice-contact">
                              <div class="col-md-8">
                                <div class="invoice-box row">
                                  <div class="col-sm-12">
                                    <table class="table table-responsive invoice-table table-borderless">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <img src="./files/assets/images/app_logo_transparent.png" class="m-b-10 img-100" alt="" /></td>
                                        </tr>
                                        <tr>
                                          <td>Solodium</td>
                                        </tr>
                                        <tr>
                                          <td>123 6th St. Melbourne, FL 32904 West Chicago, IL 60185</td>
                                        </tr>
                                        <tr>
                                          <td>Mo:- +91 919-91-91-919</td>
                                        </tr>

                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card-block">
                              <div class="row invoive-info">
                                <div class="col-md-4 col-xs-12 invoice-client-info">
                                  <h6>Client Information :</h6>
                                  <h6 class="m-0">Test Seller</h6>
                                  <p class="m-0 m-t-10">123 6th St. Melbourne, FL 32904 West Chicago, IL 60185</p>
                                  <p class="m-0">(1234) - 567891</p>

                                </div>
                                <div class="col-md-4 col-sm-6">
                                  <h6>order Information :</h6>
                                  <table class="table table-responsive invoice-table invoice-order table-borderless">
                                    <tbody>
                                      <tr>
                                        <th>Order Date :</th>
                                        <td>{this.state.data.dateOfOrder}</td>
                                      </tr>
                                      <tr>
                                        <th>Excepted Delivery :</th>
                                        <td> {this.state.data.deliveryDate}</td>
                                      </tr>
                                      <tr>
                                        <th>Status :</th>
                                        <td>
                                          {this.state.data.orderStatusID === "1" ?
                                            <label class="label label-inverse">Accepted</label>
                                            : this.state.data.orderStatusID === "2" ?
                                              <label class="label label-warning">Dispatch</label>
                                              : this.state.data.orderStatusID === "3" ?
                                                <label class="label label-success">Delivered</label>
                                                : this.state.data.orderStatusID === "5" ?
                                                  <label class="label label-danger">Pending</label>
                                                  : ""
                                          }
                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                  <h6 class="m-b-20">Transaction ID <span>#{this.state.data.transactionID}</span></h6>
                                  <h6 class="text-uppercase text-primary">
                                    Payment Method :<span>{this.state.data.payment}</span>
                                  </h6>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="table-responsive">
                                    <table class="table  invoice-detail-table">
                                      <thead>
                                        <tr class="thead-inverse">
                                          <th>Product Name</th>
                                          <th>Attribute</th>
                                          <th>Quantity</th>
                                          <th>Total</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {this.state.data.Products !== undefined &&
                                          this.state.data.Products !== null &&
                                          this.state.data.Products !== [] &&
                                          this.state.data.Products.length > 0 ? (
                                            this.state.data.Products.map((top, i) => (
                                              < tr >
                                                <td><h6>{top.name}</h6>                                          </td>
                                                <td>{top.Attribute}</td>
                                                <td>{top.Quantity}</td>
                                                <td>{top.price}</td>
                                              </tr>
                                            ))) : ""
                                        }
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-12">
                                  <table class="table table-responsive invoice-table invoice-total">
                                    <tbody>
                                      <tr>
                                        <th>Sub Total :</th>
                                        <td>{this.state.data.totalAmount}</td>
                                      </tr>
                                      <tr>
                                        <th className="text-success"> <hr />Discount Applied :</th>
                                        <td className="text-success"> <hr />{this.state.data.discount}</td>

                                      </tr>
                                      <tr>
                                        <th className="text-danger"> <hr />Delivery Charges :</th>
                                        <td className="text-danger"> <hr />{this.state.data.deliveryCharges}</td>

                                      </tr>
                                      <tr class="text-info">
                                        <td>
                                          <hr />
                                          <h5 >Grand Total :</h5>
                                        </td>
                                        <td>
                                          <hr />
                                          <h5 >{this.state.data.OrderTotal}</h5>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div class="row text-center">
                              <div class="col-sm-12 invoice-btn-group text-center">
                                <button type="button" class="btn btn-primary btn-print-invoice m-b-10 btn-sm waves-effect waves-light m-r-20">Print</button>
                                <button type="button" class="btn btn-danger waves-effect m-b-10 btn-sm waves-light">Cancel</button>
                              </div>
                            </div></div>

                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >);
  }
}

export default OrderView;
