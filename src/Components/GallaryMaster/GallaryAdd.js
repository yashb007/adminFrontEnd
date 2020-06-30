import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

class GallaryAdd extends React.Component {
  state = {
    status: "active",
    gallary_list: [
      {
        gallaryID: 1,
        name: " gallary 1",
        status: "active",
        price: 9.99,
        Coins: 9000,
        Duration: 30,
        refreals: 300,
        Image: "https://www.nfcfenterprises.com/wp-content/uploads/2017/11/platinum-gallary.png"

      },
      {
        gallaryID: 2,
        name: "gallary-2 ",
        status: "active",
        price: 5.99,
        Coins: 5000,
        Duration: 20,
        refreals: 200,
        Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-gallary.jpg"
      },

    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.gallary_id !== this.props.gallary_id) {
      this.setState({ gallary_id: this.props.gallary_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.gallary_list.find((element) => {
      return element.gallaryID === this.props.gallary_id;
    })
    this.setState({
      banner_data: a,
      name: a.name,
      image_url: a.Image,

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
    Swal.fire("Added !", "Gallary has been Added", "success");
    window.location.href = "#/gallary"
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
                    <label className="col-sm-3 col-form-label">Gallary Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Gallary Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-3">
                      Main Image
                </div>
                    <div className="col-sm-9">
                      <form id="userImage" name="userImage" encType="multipart/form-data" className="text-capitalize">
                        <input accept="image/*" onChange={this.handleImageUpload} id="user_Image" type="file" className="form-control" autoComplete="off" name="media[]"
                          data-toggle="tooltip" title="Click To Upload Photo"
                        />
                        <div id="id_image_section_lable" className="pt-2">
                          {
                            this.state.image_url
                              ?
                              this.state.image_url !== null || this.state.image_url !== undefined || this.state.image_url !== {}
                                ?
                                <img src={this.state.image_url} alt=""
                                  className="img-100" onError={e => {
                                    e.target.src = ""
                                  }} />
                                :
                                ''
                              :
                              ''
                          }
                        </div>
                      </form>
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
                    <Link to="/gallary" class="btn btn-outline-secondary">
                      <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                    {
                      this.state.isSaving
                        ?
                        <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                        :
                        <button onClick={this.addbanner} className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i>Save</button>
                    }

                  </div>
                </div>


              </div>
            </div>
        } </div >
    );
  }
}

export default GallaryAdd;
