import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";



class BannerAdd extends React.Component {
  state = {
    status: "active",
    banner_list: [
      {
        bannerID: 1,
        bannerName: "we buy and sell pre-owned Luxury watches",
        status: "active",
        bannersImage: "https://ik.imagekit.io/bfrs/tr:w-800,h-800,pr-true,cm-pad_resize,bg-FFFFFF/image_luxevault/data/aa728.jpg"

      },
      {
        bannerID: 2,
        bannerName: "Gold Coins",
        status: "active",
        bannersImage: "https://www.advertgallery.com/wp-content/uploads/2018/10/malabar-gold-and-diamonds-take-home-250-kg-gold-ad-times-of-india-bangalore-16-10-2018.png"
      },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.banner_id !== this.props.banner_id) {
      this.setState({ banner_id: this.props.banner_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.banner_list.find((element) => {
      return element.bannerID === this.props.banner_id;
    })
    this.setState({
      banner_data: a,
      name: a.bannerName,
      image_url: a.bannersImage
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
    Swal.fire("Added !", "Banner has been Added", "success");
    window.location.href = "#/banner"
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
                    <label className="col-sm-3 col-form-label">Banner Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Banner Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-3">
                      Image
                </div>
                    <div className="col-sm-9">
                      <form id="userImage" name="userImage" encType="multipart/form-data" className="text-capitalize">

                        <div className="form-group">

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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-addon" id="basic-addon4">Status</span>
                    <select name="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                      <option value="active" name="active">Active</option>
                      <option value="inactive" name="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="text-right col-6 offset-6">
                    <Link to="/banner" class="btn btn-outline-secondary">

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

export default BannerAdd;
