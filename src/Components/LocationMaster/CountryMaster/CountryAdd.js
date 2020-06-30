import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

class TopUpAdd extends React.Component {
  state = {
    status: "active",
    country_list: [
      {
        country_id: 1,
        country_name: "India",
        status: "active",
      },
      {
        country_id: 2,
        country_name: "Kuwait",
        status: "active",
      },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.country_id !== this.props.country_id) {
      this.setState({ country_id: this.props.country_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.country_list.find((element) => {
      return element.country_id === this.props.country_id;
    })
    this.setState({
      data: a,
      name: a.country_name,
      image_url: a.topup_Image,
      Coins: a.coins,
      Price: a.price,
    });
  }

  addcountry = () => {
    var that = this;
    var data = new FormData();
    that.setState({ isSaving: true })
    if (
      that.state.name === undefined ||
      that.state.name === null ||
      that.state.name === ""
    ) {
      document.getElementById("name").focus();
      that.setState({ isSaving: false })
      return false;
    }
    Swal.fire("Added !", "Country has been Added", "success");
    window.location.href = "#/country"
    that.setState({ isSaving: false })

  };
  handleImageUpload = (event) => {
    document.getElementById('id_image_section_lable').innerHTML = "";
    let element = $("#user_Image").get(0);
    $("#id_image_section").empty();
    this.setState({ accepted: element });
    var proof_img = [];
    let obj = {};
    console.log(element.files);
    this.setState({ user_Image: element.files });
    for (var i = 0; i < element.files.length; i++) {
      var file1 = element.files[i];
      var img = document.createElement("img");
      img.className = "img-100";
      var filePath = URL.createObjectURL(file1);
      img.src = filePath;
      $("#id_image_section_lable").append(img);
    }
  }
  // uploadMedia = () => {
  //   var that = this;
  //   var form = $('#userImage')[0];
  //   var data = new FormData(form);
  //   data.append('upload_for', 'user');
  //   fetch(Constant.getAPI() + "/mediaUpload", {
  //     method: "post",
  //     body: data
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(function (json) {
  //     if (json.error === "SFD") {
  //       that.editUser(json.data.media_id);
  //     } else {
  //       that.setState({ category_data: [] });
  //       console.log(json.error);
  //     }
  //   });
  // }
  onSaveData = () => {
    var that = this;
    that.setState({ isSaving: true });
    if (that.state.accepted) {
      that.uploadMedia();
    } else {
      that.editUser(that.state.media_id);
    }
  }
  render() {
    return (
      <div className="">
        {
          this.state.isloading ?
            ""
            :
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Country Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Country Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-radio">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Status</label>
                      <div className="col-sm-9">
                        <div className="radio radio-inline">
                          <label>
                            <input type="radio" name="radio" checked="checked" />
                            <i className="helper"></i>Active
                      </label>
                        </div>
                        <div className="radio radio-inline">
                          <label>
                            <input type="radio" name="radio" />
                            <i className="helper"></i>Inactive</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="text-right col-6 offset-6">
                    <Link to="/country" class="btn btn-outline-secondary">
                      <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                    {
                      this.state.isSaving
                        ?
                        <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                        :
                        <button onClick={this.addcountry} className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i>Save</button>
                    }

                  </div>
                </div>


              </div>
            </div>
        } </div >
    );
  }
}

export default TopUpAdd;
