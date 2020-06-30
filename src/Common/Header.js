import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

  onLogout = () => {
    // swal({
    //   title: "Are you sure?",
    //   text: "",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     localStorage.clear();
    //     swal("You have Logged Out Successfully!", {
    //       icon: "success",
    //     });
    //     window.location.href="#/"
    //     window.location.reload();
    //   // } else {
    //     // swal("Your imaginary file is safe!");
    //   }
    // });
    localStorage.clear();
    window.location.href = "#/"
    window.location.reload();
  }
  render() {
    return (
      <nav className="navbar header-navbar pcoded-header">
        <div className="navbar-wrapper">

          <div className="navbar-logo">
            <a className="mobile-menu" id="mobile-collapse" href="#!">
              <i className="feather icon-menu"></i>
            </a>
            <Link to="/">
              <img className="img-fluid img-hover-main" src="./files/assets/images/app_logo_transparent.png" alt="Theme-Logo" />
              {/* <h4>Soldiom MarketPlace</h4> */}
            </Link>
            <a className="mobile-options">
              <i className="feather icon-more-horizontal"></i>
            </a>
          </div>

          <div className="navbar-container container-fluid">
            {/* <ul className="nav-left">
              <li className="header-search">
                <div className="main-search morphsearch-search">
                  <div className="input-group">
                    <span className="input-group-addon search-close"><i className="feather icon-x"></i></span>
                    <input type="text" className="form-control" />
                    <span className="input-group-addon search-btn"><i className="feather icon-search"></i></span>
                  </div>
                </div>
              </li>
              <li>
                <a href="#!" onclick="javascript:toggleFullScreen()">
                  <i className="feather icon-maximize full-screen"></i>
                </a>
              </li>
            </ul> */}
            <ul className="nav-right">
              <li className="header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <i className="feather icon-bell"></i>
                    <span className="badge bg-c-pink">5</span>
                  </div>
                  <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut">
                    <li>
                      <h6>Notifications</h6>
                      <label className="label label-danger">New</label>
                    </li>
                    <li>
                      <div className="media">
                        <img className="d-flex align-self-center img-radius" src="./files/assets/images/avatar-4.jpg"
                          alt="Generic placeholder image" />
                        <div className="media-body">
                          <h5 className="notification-user">John Doe</h5>
                          <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                          elit.</p>
                          <span className="notification-time">30 minutes ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <img className="d-flex align-self-center img-radius" src="./files/assets/images/avatar-3.jpg"
                          alt="Generic placeholder image" />
                        <div className="media-body">
                          <h5 className="notification-user">Joseph William</h5>
                          <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                          elit.</p>
                          <span className="notification-time">30 minutes ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <img className="d-flex align-self-center img-radius" src="./files/assets/images/avatar-4.jpg"
                          alt="Generic placeholder image" />
                        <div className="media-body">
                          <h5 className="notification-user">Sara Soudein</h5>
                          <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                          elit.</p>
                          <span className="notification-time">30 minutes ago</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li className="header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                    <i className="feather icon-message-square"></i>
                    <span className="badge bg-c-green">3</span>
                  </div>
                </div>
              </li>
               */}
              <li className="user-profile header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <img src="./files/assets/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image" />
                    <span>John Doe</span>
                    <i className="feather icon-chevron-down"></i>
                  </div>
                  <ul className="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut">
                    <li>
                      <a href="user-profile.htm">
                        <i className="feather icon-user"></i> Profile
                    </a>
                    </li>
                    <li onClick={this.onLogout}>
                      {/* <a href="auth-normal-sign-in.htm"> */}
                      <i className="feather icon-log-out"></i> Logout
                    {/* </a> */}
                    </li>
                  </ul>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Header

