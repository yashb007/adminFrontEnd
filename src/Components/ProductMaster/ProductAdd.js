import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class ProductAdd extends React.Component {
  state = {
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
    status: "active",
    desc: `<div>
    <h2>What is Lorem Ipsum?</h2>
    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
   </div>`,
    category_list: [
      {
        category_id: 1,
        category_name: "Motor",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png"
      }, {
        category_id: 2,
        category_name: "Electronics",
        status: "active",
        category_Image: "https://image.shutterstock.com/image-photo/pile-used-electronic-waste-on-260nw-1011557155.jpg"
      }, {
        category_id: 3,
        category_name: "Clothes",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2014/04/03/11/54/mannequin-312526__340.png"
      }, {
        category_id: 4,
        category_name: "Baby",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2016/04/14/08/40/newborn-1328454_960_720.jpg"
      }, {
        category_id: 5,
        category_name: "Business",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg"
      }, {
        category_id: 6,
        category_name: "Mobile",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg"
      }, {
        category_id: 7,
        category_name: "Toys",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_960_720.jpg"
      }, {
        category_id: 8,
        category_name: "Beauty",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2016/02/19/11/35/make-up-1209798_960_720.jpg"
      },
      {
        category_id: 9,
        category_name: "Pets",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2019/08/25/13/34/dogs-4429513_960_720.jpg"
      }, {
        category_id: 10,
        category_name: "Stationery",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2018/08/10/12/03/school-tools-3596680_960_720.jpg"
      }, {
        category_id: 11,
        category_name: "utility",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2017/03/22/15/36/front-loader-2165374_960_720.png"
      },
      {
        category_id: 12,
        category_name: "Property",
        status: "active",
        category_Image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg"
      },
    ],
    product_list: [
      {
        productID: 1,
        name: "Platinum product",
        status: "active",
        price: 9.99,
        Coins: 9000,
        Duration: 30,
        refreals: 300,
        Image: "https://www.nfcfenterprises.com/wp-content/uploads/2017/11/platinum-product.png"

      },
      {
        productID: 2,
        name: "Gold-product",
        status: "active",
        price: 5.99,
        Coins: 5000,
        Duration: 20,
        refreals: 200,
        Image: "https://earlyyearsshop.ie/wp-content/uploads/2014/04/Gold-product.jpg"
      },
      {
        productID: 3,
        name: "Silver-product",
        status: "active",
        price: 3.99,
        Coins: 3000,
        Duration: 10,
        refreals: 100,
        Image: "https://phillycasinoparties.com/wp-content/uploads/2019/01/silver-product_01-150x150.png"
      },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.product_id !== this.props.product_id) {
      this.setState({ product_id: this.props.product_id });
      this.getbannerDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getbannerDetails = () => {
    var a = this.state.product_list.find((element) => {
      return element.productID === this.props.product_id;
    })
    this.setState({
      banner_data: a,
      name: a.name,
      image_url: a.Image,
      Duration: a.Duration,
      Referrals: a.refreals,
      Price: a.price, Coins: a.Coins

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
    Swal.fire("Added !", "product has been Added", "success");
    window.location.href = "#/product"
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
  handleChangeTermsConditions = (value) => {
    this.setState({ terms_conditions: value });
  }
  // uploadMedia = () => {
  //   var that = this;
  //   var form = $('#userImage')[0];
  //   var data = new FormData(form);
  //   data.append('upload_for', 'user');
  //   fetch(Constant.getAPI() + "/mediaUpload", {
  //     method: "product",
  //     body: data
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(function (json) {
  //     if (json.error === "SFD") {
  //       that.editUser(json.data.media_id);
  //     } else {
  //       that.setState({ product_data: [] });
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
                    <label className="col-sm-3 col-form-label">Category</label>
                    <div className="col-sm-9">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Select Category</option>
                        {
                          this.state.category_list !== undefined &&
                            this.state.category_list !== null &&
                            this.state.category_list !== [] &&
                            this.state.category_list.length > 0 ? (
                              this.state.category_list.map((g, i) => (
                                <option value="opt2">{g.category_name}</option>
                              ))) : ""
                        }

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Sub Category</label>
                    <div className="col-sm-9">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Sub  Category</option>
                        {
                          this.state.category_list !== undefined &&
                            this.state.category_list !== null &&
                            this.state.category_list !== [] &&
                            this.state.category_list.length > 0 ? (
                              this.state.category_list.map((g, i) => (
                                <option value="opt2">{g.category_name}</option>
                              ))) : ""
                        }

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Brand</label>
                    <div className="col-sm-9">
                      <select name="select" className="form-control form-control-inverse">
                        <option value="opt1">Select  Brand</option>
                        {
                          this.state.category_list !== undefined &&
                            this.state.category_list !== null &&
                            this.state.category_list !== [] &&
                            this.state.category_list.length > 0 ? (
                              this.state.category_list.map((g, i) => (
                                <option value="opt2">{g.category_name}</option>
                              ))) : ""
                        }

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">product Title</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="product Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                      <ReactQuill value={this.state.desc}
                        onChange={this.handleChangeTermsConditions} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Price </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        name="Price"
                        id="Price"
                        placeholder="Price"
                        onChange={this.handleChange}
                        value={this.state.Price}
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
              <div className="card-footer">
                <div className="row">
                  <div className="text-right col-6 offset-6">
                    <Link to="/product" class="btn btn-outline-secondary">
                      <i class="icofont icofont-rounded-double-left"></i>
                      Back
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
            </div >
        } </div >
    );
  }
}

export default ProductAdd;
