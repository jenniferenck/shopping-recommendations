import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from '../Button';

import './WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page">
        Logo up at top
        <div className="welcome-page-body">
          <div className="left-side">
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
                  Been searching for that perfect
                  <div className="sliding-vertical intro-text">
                    <span>birthday gift?</span>
                    <span>party dress?</span>
                    <span>pair of jeans?</span>
                    <span>jacket?</span>
                    <span>watch?</span>
                    <span>couch?</span>
                  </div>
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

            <Button />
          </div>
          <div className="right-side">Right side with Images Plain</div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
