import React from 'react';
import { Link } from 'react-router-dom'
import 'react-chat-elements/dist/main.css';
import MUIDataTable from "mui-datatables";
import Hashids from 'hashids'
var hashids = new Hashids("this is my salt", 15, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


class Bidding extends React.Component {
    state = {
        value: { min: 200, max: 10000 },
        downloadFile: true,
        numberOfRows: 5,
        currentPage: 0,
        user_List: [
            {
                id: "1",
                status: "false",
                title: "Josephin Doe",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 450,
            },
            {
                id: "2",
                status: "false",
                title: "Lary Doe",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 580,
            }, {
                id: "3",
                status: "false",
                title: "Alice",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 890,
            }, {
                id: "4",
                status: "false",
                title: "Alia",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 890,
            }, {
                id: "5",
                status: "true",
                title: "Suzen",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 900,
            }, {
                id: "6",
                status: "false",
                title: "Michael Scofield",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 850,
            }, {
                id: "7",
                status: "false",
                title: "Irina Shayk",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 800,
            }, {
                id: "8",
                status: "false",
                title: "Sara Tancredi",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 500,
            }, {
                id: "9",
                status: "false",
                title: "Lary",
                avatar: './files/assets/images/avatar-4.jpg',
                alt: 'Reactjs',
                subtitle: 'What are you doing?',
                date: "1:00 AM,20 March 2020",
                price: 0,
            },
        ]
    }
    goBackPage = (e) => {
        e.preventDefault();
        this.props.history.goBack()
    }
    render() {
        const columns = [
            {
                name: "id",
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
                name: "avatar",
                label: "User Image",
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: avatar => {
                        return (
                            <div>
                                {" "}
                                <img src={avatar !== null && avatar !== "" ? avatar : './images/thumbnail.jpg'} alt="" className="img-fluid img-40" />
                            </div>
                        );
                    }
                }
            },
            {
                name: "title",
                label: "User Name",
                options: {
                    filter: true,
                    sort: true
                }
            },
            {
                name: "date",
                label: "Date ",
                options: {
                    filter: true,
                    sort: true,

                }
            },
            {
                name: "price",
                label: "Bidding Price",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "status",
                label: "Bidding Status",
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: status => {
                        return (
                            <div>
                                {
                                    status === "true" ?
                                        <label class="label label-primary">isWinningBid</label>
                                        :
                                        "-"
                                }
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
                    <div class="main-body ">
                        <div class="page-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Bidding</h5>
                                    <button
                                        onClick={this.goBackPage}
                                        className="btn btn-outline-secondary btn-sm d-inline-block f-right" >
                                        <i class="icofont icofont-rounded-double-left"></i> Back
                                        </button>
                                </div>
                                {
                                    this.state.isloading ?
                                        ""
                                        :
                                        <MUIDataTable

                                            data={this.state.user_List}
                                            columns={columns}
                                            options={options}
                                        />
                                }
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        );
    }
}

export default Bidding;
