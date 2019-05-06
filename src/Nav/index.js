import React, { Component } from 'react';

import './Nav.css';
import Button from '../Button';
import Logo from '../Logo';

class Nav extends Component {
  render() {
    const { allowedAccess, activeSearch, handleActiveSearch } = this.props;
    return (
      <div className="App-header">
        <Logo />

        {activeSearch ? (
          <Button onClick={handleActiveSearch} />
        ) : (
          <Button allowedAccess={allowedAccess} onClick={handleActiveSearch} />
        )}
      </div>
    );
  }
}

export default Nav;
