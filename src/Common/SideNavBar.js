import React from 'react';
import { Link } from 'react-router-dom'

class SideNavBar extends React.Component {

  render() {
    return (
      <nav className="pcoded-navbar">
        <div className="pcoded-inner-navbar main-menu">
          <div className="pcoded-navigatio-lavel">General</div>
          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <Link to="/">
                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                <span className="pcoded-mtext">Dashboard</span>
              </Link>
            </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Users</div>
          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <Link to="/users">
                <span className="pcoded-micon"><i className="feather icon-users"></i></span>
                <span className="pcoded-mtext">End Users</span>
              </Link>
            </li>
            <li className="">
              <Link to="/seller">
                <span className="pcoded-micon"><i class="icofont icofont-business-man-alt-1"></i></span>
                <span className="pcoded-mtext">Seller</span>
              </Link>
            </li>
          </ul>

          <div className="pcoded-navigatio-lavel">Posts</div>
          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <Link to="/post">
                <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                <span className="pcoded-mtext">Ads</span>
              </Link>
            </li>
            <li className="">
              <Link to="/chat">
                <span className="pcoded-micon"><i className="icofont icofont-ui-chat"></i></span>
                <span className="pcoded-mtext">Chat</span>
              </Link>
            </li>
            <li className="">
              <Link to="/orders">
                <span className="pcoded-micon"><i className="feather icon-shopping-cart"></i></span>
                <span className="pcoded-mtext">Orders</span>
              </Link>
            </li>
          </ul>
          {/* <div className="pcoded-navigatio-lavel">Masters</div> */}
          <ul className="pcoded-item pcoded-left-item">
            <li className="pcoded-hasmenu ">
              <Link to="/">
                <span className="pcoded-micon"><i className="feather icon-activity"></i></span>
                <span className="pcoded-mtext">Masters</span>
              </Link>
              {/* </li> */}
              <ul class="pcoded-submenu">
                <li className="">
                  <Link to="/banner">
                    <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                    <span className="pcoded-mtext">Banner Master</span>
                  </Link>
                </li>
               
                <li>
                  <Link to="/gallary">
                    <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                    <span className="pcoded-mtext">Gallery Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/package">
                    <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                    <span className="pcoded-mtext">Package Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/topup">
                    <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                    <span className="pcoded-mtext">Top Up</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/offer">
                    <span className="pcoded-micon"><i className="icofont icofont-price"></i></span>
                    <span className="pcoded-mtext">Offer Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/product">
                    <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                    <span className="pcoded-mtext">Products Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/category">
                    <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                    <span className="pcoded-mtext">Category Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/brand">
                    <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                    <span className="pcoded-mtext">Brand Master</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/language">
                    <span className="pcoded-micon"><i className="icofont icofont-book-alt"></i></span>
                    <span className="pcoded-mtext">Language Master</span>
                  </Link>
                </li>
                <li className="pcoded-hasmenu ">
                  <Link to="/">
                    <span className="pcoded-micon"><i className="icofont icofont-location-pin"></i></span>
                    <span className="pcoded-mtext">Location Master</span>
                  </Link>
                  {/* </li> */}
                  <ul class="pcoded-submenu">
                    <li className="">
                      <Link to="/country">
                        <span className="pcoded-mtext">Country Master</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/governorate">
                        <span className="pcoded-mtext">Governorate Master</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/area">
                        <span className="pcoded-mtext">Area Master</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Settings</div>
          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <Link to="/terms">
                <span className="pcoded-micon"><i className="icofont icofont-law-document"></i></span>
                <span className="pcoded-mtext">Terms And Conditions</span>
              </Link>
            </li>
            <li className="">
              <Link to="/privacy-policy">
                <span className="pcoded-micon"><i className="feather icon-shield"></i></span>
                <span className="pcoded-mtext">Privacy Policy</span>
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <span className="pcoded-micon"><i className="icofont icofont-question-square"></i></span>
                <span className="pcoded-mtext">FAQs</span>
              </Link>
            </li>
            {/* <li className="">
              <Link to="/">
                <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                <span className="pcoded-mtext">FAQs</span>
              </Link>
            </li> */}
          </ul>
        </div >
      </nav >
    );
  }
}

export default SideNavBar