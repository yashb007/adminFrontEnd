import React, { Component } from "react";
import { Link } from "react-router-dom";
import Constant from "../Constant";
import $ from "jquery";
import axios from 'axios'

export default class CompanyAdminLogin extends Component {
  state = {};

  onLogin = e => {
    e.preventDefault();
    // localStorage.setItem("soldm_ad_log", true);
    // window.location.href = "#/";
    // window.location.reload();
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    // $.ajax({
    //   url: Constant.getAPI() + "/usetok/login",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: JSON.stringify(data),
    //   // mode:"no-cors",
    //   success: function(response){
    //     console.log(response)
    //   },
    //   complete: function (xhr) {
    //     console.log(xhr)
    // var response = xhr.responseJSON;
    // if (response.status === true) {
    //   console.log(response);
    // } else {
    //   console.log(response);
    //   showConfirmationModal({
    //     whichone: 1,
    //     what: "show_dialog",
    //     message: response.message,
    //     which_dialog_button: "ok",
    //     next_function: ""
    //   });
    // }
    //   },
    //   error: function(err){
    //     console.log(err.status)
    //   }
    // });

    fetch(Constant.getAPI() + "/usetok/login", {
      method: "post",
      mode: "no-cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
          console.log(json);
        // if (json.error === "SFD") {
          //   console.log(json.data);
        // } else {
        //   console.log(json.error);
        // }
      });


      // axios.post(Constant.getAPI() + "/usetok/login", {
      //   username: this.state.username,
      //   password: this.state.password
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form
                className="md-float-material form-material"
                onSubmit={this.onLogin}
              >
                <div className="text-center">
                  <img
                    src="./files/assets/images/app_logo_transparent.png"
                    alt="logo.png"
                  />
                </div>
                <div className="auth-box card">
                  <div className="card-block">
                    <div className="row m-b-20">
                      <div className="col-md-12">
                        <h3 className="text-center">Sign In</h3>
                      </div>
                    </div>
                    {/* <div className="form-group form-primary">
                      <input type="text" name="domain" className="form-control" required="" placeholder="Domain" />
                      <span className="form-bar"></span>
                    </div> */}
                    <hr />
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        required=""
                        placeholder="Username"
                        onChange={this.onInputChange}
                        value={this.state.username}
                      />
                      <span className="form-bar"></span>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        required=""
                        placeholder="Password"
                        onChange={this.onInputChange}
                        value={this.state.password}
                      />
                      <span className="form-bar"></span>
                    </div>

                    <div className="row m-t-30">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
