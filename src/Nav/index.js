import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import Button from '../Button';

class Nav extends Component {
  render() {
    const { allowedAccess } = this.props;
    return (
      <div className="App-header">
        {/* PLACEHOLDER FOR LOGO AND LINKS */}

        <Button allowedAccess={allowedAccess} />
      </div>
    );
  }
}

export default Nav;
