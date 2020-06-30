import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div class="footer bg-light p-3">
        {/* <div class="footer bg-inverse"> */}
        <p class="text-center text-dark">Copyright © {new Date().getFullYear()} <strong className="text-c-orenge font-weight-bold">The Soldiom Marketplace</strong>. All rights reserved.</p>
      </div>
    );
  }
}

export default Footer

