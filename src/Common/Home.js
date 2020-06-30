import React from 'react';
import Header from './Header.js';
import SideNavBar from './SideNavBar.js'
import Footer from './Footer.js';
class Home extends React.Component {

  render() {
    return (
      <div>
        <div id="pcoded" className="pcoded">
          <div className="pcoded-overlay-box"></div>
          <div className="pcoded-container navbar-wrapper">
            <Header />
            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
                <SideNavBar />
                {this.props.children}
              </div>
                <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home

