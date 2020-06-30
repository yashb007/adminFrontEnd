import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

class CategoryAdd extends React.Component {
  state = {
    status: "active",
    category_list: [
      {
        category_id: 1,
        category_name: "Motor",
        status: "active",
        price: 9.99,
        coins: 9000,
        category_Image: "https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png"
      }, {
        category_id: 2,
        category_name: "Electronics",
        status: "active",
        price: 5.99,
        coins: 5000,
        category_Image: "https://image.shutterstock.com/image-photo/pile-used-electronic-waste-on-260nw-1011557155.jpg"
      }, {
        category_id: 3,
        category_name: "Clothes",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2014/04/03/11/54/mannequin-312526__340.png"
      }, {
        category_id: 4,
        category_name: "Baby",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2016/04/14/08/40/newborn-1328454_960_720.jpg"
      }, {
        category_id: 5,
        category_name: "Business",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg"
      }, {
        category_id: 6,
        category_name: "Mobile",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg"
      }, {
        category_id: 7,
        category_name: "Toys",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_960_720.jpg"
      }, {
        category_id: 8,
        category_name: "Beauty",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2016/02/19/11/35/make-up-1209798_960_720.jpg"
      },
      {
        category_id: 9,
        category_name: "Pets",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2019/08/25/13/34/dogs-4429513_960_720.jpg"
      }, {
        category_id: 10,
        category_name: "Stationery",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2018/08/10/12/03/school-tools-3596680_960_720.jpg"
      }, {
        category_id: 11,
        category_name: "utility",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2017/03/22/15/36/front-loader-2165374_960_720.png"
      },
      {
        category_id: 12,
        category_name: "Property",
        status: "active",
        price: 3.99,
        coins: 3000,
        category_Image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg"
      },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.category_id !== this.props.category_id) {
      this.setState({ category_id: this.props.category_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.category_list.find((element) => {
      return element.category_id === this.props.category_id;
    })
    this.setState({
      data: a,
      name: a.category_name,
      image_url: a.category_Image,
      Coins: a.coins,
      Price: a.price,
    });
  }

  addcategory = () => {
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
    Swal.fire("Added !", "Top Up has been Added", "success");
    window.location.href = "#/category"
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
                    <label className="col-sm-3 col-form-label">Parent category</label>
                    <div className="col-sm-9">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Select Parent category</option>
                        <option value="opt2">Food</option>
                        <option value="opt3">Laptop</option>
                        <option value="opt3">Clothes</option>

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Category Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Category Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Category Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Category Name"
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
              <div className="card-footer">
                <div className="row">
                  <div className="text-right col-6 offset-6">
                    <Link to="/category" class="btn btn-outline-secondary">
                      <i class="icofont icofont-rounded-double-left"></i>
                      Back
                            </Link>
                    {
                      this.state.isSaving
                        ?
                        <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                        :
                        <button onClick={this.addcategory} className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i> Save</button>
                    }
                  </div>
                </div>
              </div>
            </div>
        } </div >
    );
  }
}

export default CategoryAdd;
