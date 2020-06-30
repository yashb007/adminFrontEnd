import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

class AreaAdd extends React.Component {
  state = {
    status: "active",
    area_list: [
      {
        area_id: 1,
        area_name: "Hawally",
        area_code: 12,
        pincode: "123131",
        status: "active",
      },
      {
        area_id: 2,
        area_name: "Mishref",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 3,
        area_name: "Jabriya",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 4,
        area_name: "Salmiya",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 5,
        area_name: "Jahra - Al Naeem	",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 6,
        area_name: "Jahra - Jahra Area",
        area_code: 12,
        pincode: "123131",
        status: "active",
      }, {
        area_id: 7,
        area_name: "Faiha",
        area_code: 12,
        pincode: "123131",
        status: "active",
      },
    ],
    governorate_list: [
      {
        governorate_id: 1,
        governorate_name: "Hawally",
        status: "active",
      }, {
        governorate_id: 2,
        governorate_name: "Al Jahra	",
        status: "active",
      }, {
        governorate_id: 3,
        governorate_name: "Kuwait City",
        status: "active",
      }, {
        governorate_id: 4,
        governorate_name: "Farwaniya",
        status: "active",
      }, {
        governorate_id: 5,
        governorate_name: "Mubarak Al-Kabir	",
        status: "active",
      },

    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.area_id !== this.props.area_id) {
      this.setState({ area_id: this.props.area_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.area_list.find((element) => {
      return element.area_id === this.props.area_id;
    })
    this.setState({
      data: a,
      name: a.area_name,
      image_url: a.Area_Image,
      Coins: a.coins,
      Price: a.price,
    });
  }

  addarea = () => {
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
    Swal.fire("Added !", "Area has been Added", "success");
    window.location.href = "#/area"
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
                    <label className="col-sm-3 col-form-label">Governorate</label>
                    <div className="col-sm-9">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Select Governorate</option>
                        {
                          this.state.governorate_list !== undefined &&
                            this.state.governorate_list !== null &&
                            this.state.governorate_list !== [] &&
                            this.state.governorate_list.length > 0 ? (
                              this.state.governorate_list.map((g, i) => (
                                <option value="opt2">{g.governorate_name}</option>
                              ))) : ""
                        }

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Area Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Area Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Area Code</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="area_code"
                        id="area_code"
                        placeholder="Area Code"
                        onChange={this.handleChange}
                        value={this.state.area_code}
                      />
                    </div>
                  </div>
                </div>  <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Pincode</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        id="pincode"
                        placeholder="Pincode"
                        onChange={this.handleChange}
                        value={this.state.pincode}
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
                    <Link to="/area" class="btn btn-outline-secondary">
                      <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                    {
                      this.state.isSaving
                        ?
                        <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                        :
                        <button onClick={this.addarea} className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i>Save</button>
                    }
                  </div>
                </div>
              </div>
            </div>
        } </div >
    );
  }
}

export default AreaAdd;
