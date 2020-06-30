import React from "react";
import { Link } from "react-router-dom";
import AddressAdd from "./AddressAdd";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class AddressAddTab extends React.Component {
  state = {
    address_id: '1',
    address_data: [
      {
        address_id: "1",
        address_name: "English",
        address_code: "EN"
      },
      {
        address_id: "2",
        address_name: "Arabic",
        address_code: "AR"
      },
    ]
  };

  componentDidMount() {
    if (this.props.match.params.address_id !== undefined &&
      this.props.match.params.address_id !== null &&
      this.props.match.params.address_id !== 0 &&
      this.props.match.params.address_id !== '') {
      var decode_id = hashids.decode(this.props.match.params.address_id)
      this.setState({ address_id: decode_id[0] })
      console.log(this.props.match.params.address_id)
    }
  }
  handleaddress = (address_id) => {
    this.setState({ address_id: address_id })
  }
  render() {
    return (
      <div class="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="page-header">
                <div className="row align-items-end">
                  <div className="col-lg-8">
                    <div className="page-header-title">
                      <div className="d-inline">
                        <h4>{this.props.match.params.address_id ? "Edit" : "Add"}{" "}
                          Address</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="page-header-breadcrumb">
                      <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                          <Link to="/">
                            <i className="feather icon-home"></i> </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to={"/address/" + this.props.match.params.user_id}>
                            Address</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          {this.props.match.params.address_id ? "Edit" : "Add"}{" "}
                          Address
                    </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card ">
                      <div className="card-block">
                        <AddressAdd
                          address_id={this.state.address_id}
                          user_id={this.props.match.params.user_id}
                          goBack={this.props.history.goBack} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      </div >
    );

  }
}

export default AddressAddTab;
