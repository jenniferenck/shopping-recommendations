import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <a href="http://">
          <h2 id="logo-abbreviation">M|N</h2>
          <p id="logo-small-text">Mine.Now.</p>
        </a>
      </div>
    );
  }
}

export default Logo;
