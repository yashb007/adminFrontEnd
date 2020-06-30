import React from "react";
import { Link } from "react-router-dom";
import Hashids from 'hashids'
import $ from 'jquery'
import Swal from 'sweetalert2'

var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class GallaryView extends React.Component {
  state = {
    language_id: '1',
    car_image: [
      {
        carID: 2,
        carName: "product2 ",
        WhatsAppNo: "2018",
        carImage: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"
      },
      {
        carID: 2,
        carName: "product3 ",

        carImage: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"
      }, {
        carID: 3,
        carName: "product3 ",

        carImage: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"
      },
    ],
    gallary_list: [
      {
        gallaryID: 1,
        name: " gallary 1",
        status: "active",
        price: 9.99,
        Coins: 9000,
        Duration: 30,
        refreals: 300,
        Image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"

      },
      {
        gallaryID: 2,
        name: "gallary-2 ",
        status: "active",
        price: 5.99,
        Coins: 5000,
        Duration: 20,
        refreals: 200,
        Image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"
      },

    ],
  };

  componentDidMount() {
    if (this.props.match.params.gallary_id !== undefined &&
      this.props.match.params.gallary_id !== null &&
      this.props.match.params.gallary_id !== 0 &&
      this.props.match.params.gallary_id !== '') {
      var decode_id = hashids.decode(this.props.match.params.gallary_id)
      this.setState({ gallary_id: decode_id[0] })
      console.log(this.props.match.params.gallary_id)
    }
  }
  handleLanguage = (language_id) => {
    this.setState({ language_id: language_id })
  }
  deletecarImage = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this !",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {

        Swal.fire("Deleted!", "Image has been deleted.", "success");
        $('#gallery_media_' + id).children().remove()
        $('#gallery_media_' + id).remove()
      }
    });
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
                        <h4>{this.props.match.params.gallary_id ? "Edit" : "Add"}{" "} Gallary</h4>
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
                          <Link to="/gallary">
                            Gallary</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          {this.props.match.params.gallary_id ? "Edit" : "Add"}{" "}Gallary
                    </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-body gallery-page">
                <div className="card">
                  <div className="card-block">

                    <div className="jFiler jFiler-theme-dragdropbox">
                      <input type="file" name="files[]" id="filer_input1" multiple="multiple" />
                    </div>
                    <div className="row p-2" >
                      <div className="text-right col-6 offset-6">
                        <Link to="/gallary" class="btn btn-outline-secondary">
                          <i class="icofont icofont-rounded-double-left"></i> Back
                            </Link>
                        {
                          this.state.isSaving
                            ?
                            <button className="btn hor-grd btn-grd-inverse offset-1" disabled>Saving...!</button>
                            :
                            <button className="btn hor-grd btn-grd-inverse offset-1"><i class="ti-save"></i>Save</button>
                        }

                      </div>
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h5>Gallery </h5>
                      </div>
                      <div className="card-block">
                        <div className="row">

                          {this.state.car_image !== undefined &&
                            this.state.car_image !== null &&
                            this.state.car_image !== [] &&
                            this.state.car_image.length > 0 ? (
                              this.state.car_image.map((car, i) => (
                                <div className="col-sm-3 gallary_div"
                                  alt="image large"
                                  key={i}
                                  id={"gallery_media_" + car.carID}>
                                  <div className="image-area">
                                    <img
                                      alt="media-image"
                                      className="gallery_media"
                                      onError={e => {
                                        e.target.src = "";
                                      }}
                                      src={car.carImage !== undefined ? car.carImage : ''}
                                    />
                                    <span className="remove-image" onClick={this.deletecarImage.bind(this, car.carID)} style={{ 'display': 'inline' }}>&#215;</span>
                                  </div>

                                </div>

                              ))) : ""
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div >
          </div >
        </div>
      </div >
    );

  }
}

export default GallaryView;
