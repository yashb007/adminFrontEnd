import React from "react";
import { Link } from "react-router-dom";
import Addbanner from "./ProductAdd";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class ProductAddTab extends React.Component {
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
    if (this.props.match.params.product_id !== undefined &&
      this.props.match.params.product_id !== null &&
      this.props.match.params.product_id !== 0 &&
      this.props.match.params.product_id !== '') {
      var decode_id = hashids.decode(this.props.match.params.product_id)
      this.setState({ product_id: decode_id[0] })
      console.log(this.props.match.params.product_id)
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
                        <h4>{this.props.match.params.product_id ? "Edit" : "Add"}{" "}
                          Product</h4>
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
                          <Link to="/product">
                            Product</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          {this.props.match.params.product_id ? "Edit" : "Add"}{" "} Product
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
                        <ul className="nav nav-tabs  tabs" role="tablist">
                          {
                            this.state.language_data !== undefined && this.state.language_data !== [] ? this.state.language_data.map(language =>
                              <li className="nav-item" key={language.language_id} onClick={this.handleLanguage.bind(this, language.language_id)}>
                                <a className={this.state.language_id === language.language_id ? "nav-link active" : "nav-link"} id={'language_' + language.language_id}
                                  data-toggle="tab"
                                  href={"#about_" + language.language_id}
                                  role="tab"
                                  aria-controls={"about_" + language.language_id} aria-selected="true">{language.language_name} - {language.language_code} </a>
                              </li>
                            ) : ""}
                        </ul>
                        {
                          this.state.product_id !== undefined &&
                            this.state.product_id !== null &&
                            this.state.product_id !== 0 &&
                            this.state.product_id !== ''
                            ?
                            <Addbanner language_id={this.state.language_id}
                              goBack={this.props.history.goBack}
                              product_id={this.state.product_id} />
                            :
                            <Addbanner
                              language_id={this.state.language_id}
                              goBack={this.props.history.goBack} />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div>
      </div>
    );

  }
}

export default ProductAddTab;
