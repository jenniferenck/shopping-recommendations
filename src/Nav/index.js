import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './Nav.css';
import Button from '../Button';
import Logo from '../Logo';

class Nav extends Component {
  render() {
    const categories = [
      'pair of jeans',
      'party dress',
      'necklace',
      'jacket',
      'arm chair',
      'birthday present'
    ];
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
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
          key="example"
        >
          <div className="intro-text-section">
            <div className="intro-text">
              Been searching for that perfect {}?
            </div>
            <div className="intro-text">Look no further.</div>
            <div className="intro-text">
              Select up to 5 pins to start a search,
            </div>
            <div className="intro-text">
              or start a custom search with your own criteria
            </div>
          </div>
        </CSSTransitionGroup>

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
