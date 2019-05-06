import React, { Component } from 'react';

import './Nav.css';
import Button from '../Button';
import Logo from '../Logo';

class Nav extends Component {
  render() {
    const { allowedAccess, activeSearch, handleActiveSearch } = this.props;
    return (
      <div className="nav">
        <Logo />

        <ul className="nav-links">
          <li className="nav-link">My store</li>
          <li className="nav-link">Explore shops</li>
          <li className="nav-link">Account</li>
        </ul>

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
