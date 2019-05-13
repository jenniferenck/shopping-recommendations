import React, { Component } from 'react';

import './Nav.css';
import Logo from '../Logo';

class Nav extends Component {
  render() {
    const { allowedAccess, activeSearch, handleActiveSearch } = this.props;
    return (
      <div className="nav">
        <Logo />

        <ul className="nav-links">
          <li className="nav-link">
            <a href="http://">My store</a>
          </li>
          <li className="nav-link">
            <a href="http://">Explore shops</a>
          </li>
          <li className="nav-link">
            <a href="http://">Account</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
