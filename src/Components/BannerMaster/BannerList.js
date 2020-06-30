import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class BannerList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
    downloadFile: true,
    numberOfRows: 10,
    currentPage: 0,
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
  }
  handleStatusChange = (sid) => {
    var isChecked = $('#cattogBtn_' + sid);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.banner_list;
    var a = newArray.find((element) => {
      return element.bannerID === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ banner_list: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  deletebanner = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this !",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {

        Swal.fire("Deleted!", "banner has been deleted.", "success");
      }
    });

  }
  componentWillMount() {
    // Constant.DefaultLoadDataTable();
  }

  render() {
    const columns = [
      {
        name: "bannerID",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (bannerID, tableMeta) => {
            console.log(tableMeta)
            return (
              <div>
                #{tableMeta.rowIndex + 1}
              </div>
            );
          }
        }
      },
      {
        name: "bannersImage",
        label: "Image",
        options: {
          filter: true,
          sort: true,
          customBodyRender: bannersImage => {
            return (
              <div>
                {" "}
                <img src={bannersImage !== null && bannersImage !== "" ? bannersImage : './images/thumbnail.jpg'} alt="" className="img-fluid img-40" />
              </div>
            );
          }
        }
      },
      {
        name: "bannerName",
        label: "Category Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (status, tableMeta) => {
            console.log(tableMeta)
            return (
              <div>
                {" "}
                <Toggle
                  id={"cattogBtn_" + tableMeta.rowData[0]}
                  checked={status === 'inactive' ? false : true}
                  value={status}
                  onChange={this.handleStatusChange.bind(this, tableMeta.rowData[0])}
                />
              </div>
            );
          }
        }
      },
      {
        name: "bannerID",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: bannerID => {
            return (
              <div>
                {" "}
                <Link to={"/banner/edit/" + hashids.encode(bannerID)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletebanner.bind(this, bannerID)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Delete">
                  <i className="f-20 icofont icofont-delete-alt text-danger"></i>  </span>
              </div>
            );
          }
        }
      },
    ];
    const options = {
      selectableRows: false,
      selectableRowsOnClick: false,
      filterType: "dropdown",
      viewColumns: false,
      page: this.state.currentPage,
      rowsPerPageOptions: [5, 10, 15, 50, 100],
      rowsPerPage: this.state.numberOfRows,
    }
    return (
      <div class="pcoded-content">
        <div class="pcoded-inner-content">
          <div class="main-body">
            <div class="page-wrapper">
              <div class="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      {
                        this.state.isloading ?
                          ""
                          :
                          <MUIDataTable
                            title={
                              <div className="card-header">
                                <h5>Banner List</h5>
                                <Link
                                  to="/banner/add"
                                  className="btn btn-sm btn-primary waves-effect waves-light f-right d-inline-block " >
                                  <i className="icofont icofont-plus m-r-5"></i>
                                  Add Banner
                                     </Link>
                              </div>
                            }
                            data={this.state.banner_list}
                            columns={columns}
                            options={options}
                          />
                      }
                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </div >);
  }
}

export default BannerList;
