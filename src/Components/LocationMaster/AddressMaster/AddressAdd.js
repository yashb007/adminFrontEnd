import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

class AddressAdd extends React.Component {
  state = {
    status: "active",
    Address_data: [
      {
        address_id: "1",
        addressTitle: "Home Address",
        Govenorate: "Kuwait City	",
        area: "Kuwait City	",
        block: "",
        street: "",
        avenue: "",
        houseno: "",
        direction: "",
        Pincode: "435455",
        addtess_type: "House",
        Address_code: "EN",
        status: "active"
      },
      {
        address_id: "2",
        addressTitle: "Office Address",
        addtess_type: "Building",
        Address_code: "AR",
        Govenorate: "Al Jahra	",
        area: "Jahra - Al Naeem	",
        block: "",
        street: "",
        Pincode: "114242",
        avenue: "",
        building_number: "",
        floor_number: "",
        flat_number: "",
        direction: "",
        status: "active"
      },
      {
        address_id: "2",
        addressTitle: "Office",
        addtess_type: "Office",
        Address_code: "AR",
        Govenorate: "Al Ahmadi	",
        area: "Faiha",
        block: "",
        street: "",
        avenue: "",
        Pincode: "343533",
        building_number: "",
        floor_number: "",
        office_number: "",
        direction: "",
        status: "active"
      },
    ]
  };

  componentDidUpdate(prevProps) {
    if (prevProps.address_id !== this.props.address_id) {
      this.setState({ address_id: this.props.address_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.Address_data.find((element) => {
      return element.address_id == this.props.address_id;
    })
    console.log(a)
    this.setState({
      data: a,
      name: a.addressTitle,
      Code: a.address_code,
    });
  }

  addbanner = () => {
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
    Swal.fire("Added !", "address has been Added", "success");
    window.location.href = "#/address/"+this.props.user_id
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
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Address tilte"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
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
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Select Area</option>
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
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Block"
                        onChange={this.handleChange}
                        value={this.state.Block}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="Street"
                        id="Street"
                        placeholder="Street"
                        onChange={this.handleChange}
                        value={this.state.Street}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="avenue"
                        id="avenue"
                        placeholder="avenue"
                        onChange={this.handleChange}
                        value={this.state.avenue}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="house_no"
                        id="house_no"
                        placeholder="house_no"
                        onChange={this.handleChange}
                        value={this.state.house_no}
                      />
                    </div>
                  </div>
                </div>

              
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="floor_no"
                        id="floor_no"
                        placeholder="floor no"
                        onChange={this.handleChange}
                        value={this.state.floor_no}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="flat_no"
                        id="flat_no"
                        placeholder="flat no"
                        onChange={this.handleChange}
                        value={this.state.flat_no}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="Direction"
                        id="Direction"
                        placeholder="Direction"
                        onChange={this.handleChange}
                        value={this.state.Direction}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="latitude"
                        id="latitude"
                        placeholder="latitude"
                        onChange={this.handleChange}
                        value={this.state.latitude}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="longitude"
                        id="longitude"
                        placeholder="longitude"
                        onChange={this.handleChange}
                        value={this.state.longitude}
                      />
                    </div>
                  </div>
                </div>
               </div>
              <div className="card-footer">
                <div className="row">
                  <div className="text-right col-6 offset-6">
                    <Link to={"/address/" + this.props.user_id} class="btn btn-outline-secondary">

                      <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                    {
                      this.state.isSaving
                        ?
                        <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                        :
                        <button onClick={this.addbanner} className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i> Save</button>
                    }

                  </div>
                </div>
              </div>
            </div>
        } </div >
    );
  }
}

export default AddressAdd;
