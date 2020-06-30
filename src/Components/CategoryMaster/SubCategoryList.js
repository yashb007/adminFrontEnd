import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
// import Constant from '../../Constant'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

class SubCategoryList extends React.Component {
  state = {
    value: { min: 200, max: 10000 },
  
    numberOfRows: 5,
    currentPage: 0,
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
    let newArray = this.state.category_list;
    var a = newArray.find((element) => {
      return element.category_id === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ category_list: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  deletepackage = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this !",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {

        Swal.fire("Deleted!", "Category has been deleted.", "success");
      }
    });
  }

  render() {
    const columns = [
      {
        name: "category_id",
        label: "ID",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (category_id, tableMeta) => {
            console.log(tableMeta)
            return (
              <div>
                {tableMeta.rowIndex + 1}
              </div>
            );
          }
        }
      },
      {
        name: "category_Image",
        label: "Image",
        options: {
          filter: true,
          sort: true,
          customBodyRender: category_Image => {
            return (
              <div>
                {" "}
                <img src={category_Image !== null && category_Image !== "" ? category_Image : './images/thumbnail.jpg'} alt="" className="img-fluid img-40" />
              </div>
            );
          }
        }
      },
      {
        name: "category_name",
        label: "Sub Category Name",
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
        name: "category_id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: category_id => {
            return (
              <div>
                {" "}
                <Link to={"/category/edit/" + hashids.encode(category_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top" title=""
                  data-original-title="Edit">
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
                <span onClick={this.deletepackage.bind(this, category_id)}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Delete">
                  <i className="f-20 icofont icofont-delete-alt text-danger"></i>
                </span>
              </div>
            );
          }
        }
      },
    ];
    const options = {  
      download: false,
      print:false,
      filter: false,
      selectableRowsHeader:false,
      search: false,
      selectableRows: false,
      selectableRowsOnClick: false,
      viewColumns: false,
      page: this.state.currentPage,
      rowsPerPageOptions: [5, 10, 15, 50, 100],
      rowsPerPage: this.state.numberOfRows,
      textLabels: {
        body: {
          noMatch: "Sorry, No SubCategory are Inwarded",
          toolTip: "Sort",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        },
      },
      onChangePage: (currentPage) => {
        console.log("Page Change to : ", currentPage);
        this.setState({ currentPage })
      },
      onChangeRowsPerPage: (numberOfRows) => {
        console.log("Total Rows Per Page Change to : ", numberOfRows)
        this.setState({ numberOfRows })
      }
    }
    return (
      <tr >
        <td colSpan={this.props.colSpan} className="p-3 bg-default">
          <MUIDataTable
         
            data={this.state.category_list}
            columns={columns}
            options={options}
          />
        </td>
      </tr>
    );
  }
}

export default SubCategoryList;
