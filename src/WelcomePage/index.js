import React, { Component } from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page">
        Logo up at top
        <div className="welcome-page-body">
          <div className="left-side">Left side with button and text</div>
          <div className="right-side">Right side with Images Plain</div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
