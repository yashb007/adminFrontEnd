import React from 'react';
import "react-toggle/style.css" // for ES6 modules
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class PackageOrderView extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
    package_list: [
      {
        packageID: 1,
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
  goPrev= (e) => {
    e.preventDefault();
    this.props.history.goBack()
  }
  componentWillMount() {
    this.getbannerDetails();

  }
  getbannerDetails = () => {
    var decode_id = hashids.decode(this.props.match.params.package_id)
    var a = this.state.package_list.find((element) => {
      return element.packageID === decode_id[0];
    })
    console.log(a, decode_id[0])
    this.setState({
      data: a,

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
                              <div class="col-md-4 align-self-sm-baseline">
                                <button
                                  onClick={this.goPrev}
                                  className="btn btn-outline-secondary btn-sm d-inline-block f-right" >
                                  <i class="icofont icofont-rounded-double-left"></i> Back
                       </button>
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
                                  <h6>Package Information :</h6>
                                  <table class="table table-responsive invoice-table invoice-order table-borderless">
                                    <tbody>
                                      <tr>
                                        <th>order Date :</th>
                                        <td>November 14</td>
                                      </tr>
                                      <tr>
                                        <th>Remaining Day :</th>
                                        <td> 14</td>
                                      </tr>
                                      <tr>
                                        <th>Status :</th>
                                        <td>
                                          <span class="label label-warning">Pending</span>
                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                  <h6 class="m-b-20">Invoice Number <span>#12398521473</span></h6>
                                  <h6 class="text-uppercase text-primary">Total Due :
                                                  <span>$900.00</span>
                                  </h6>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="table-responsive">
                                    <table class="table  invoice-detail-table">
                                      <thead>
                                        <tr class="thead-inverse">
                                          <th>Package Name</th>
                                          <th>Coins</th>
                                          <th>Refreals</th>
                                          <th>Duration</th>
                                          <th>Total</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <h6>{this.state.data.name}</h6>
                                          </td>
                                          <td>{this.state.data.Coins}</td>
                                          <td>{this.state.data.refreals}</td>
                                          <td>{this.state.data.Duration} Day </td>

                                          <td>${this.state.data.price}</td>
                                        </tr>

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
                                        <td>${this.state.data.price}</td>
                                      </tr>

                                      <tr class="text-info">
                                        <td>
                                          <hr />
                                          <h5 class="text-primary">Total :</h5>
                                        </td>
                                        <td>
                                          <hr />
                                          <h5 class="text-primary">${this.state.data.price}</h5>
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
      </div>);
  }
}

export default PackageOrderView;
