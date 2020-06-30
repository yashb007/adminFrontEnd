import React from "react";
import { Link } from "react-router-dom";
import LanguageAdd from "./LanguageAdd";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class LanguageAddTab extends React.Component {
  state = {
    language_id: '1',
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
  };

  componentDidMount() {
    if (this.props.match.params.language_id !== undefined &&
      this.props.match.params.language_id !== null &&
      this.props.match.params.language_id !== 0 &&
      this.props.match.params.language_id !== '') {
      var decode_id = hashids.decode(this.props.match.params.language_id)
      this.setState({ language_id: decode_id[0] })
      console.log(this.props.match.params.language_id)
    }
  }
  handleLanguage = (language_id) => {
    this.setState({ language_id: language_id })
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
                        <h4>{this.props.match.params.language_id ? "Edit" : "Add"}{" "} Language</h4>
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
                          <Link to="/language">
                            Language</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          {this.props.match.params.language_id ? "Edit" : "Add"}{" "} Language
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
                        <LanguageAdd
                          language_id={this.state.language_id}
                          goBack={this.props.history.goBack}
                          language_id={this.state.language_id} />
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

export default LanguageAddTab;
