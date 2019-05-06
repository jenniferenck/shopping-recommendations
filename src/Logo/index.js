import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <h2 id="logo-abbreviation">MN</h2>
        <p id="logo-small-text">Mine.Now.</p>
      </div>
    );
  }
}

export default Logo;
