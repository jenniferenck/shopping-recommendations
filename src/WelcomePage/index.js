import React, { Component, ReactDOM } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from '../Button';

import './WelcomePage.css';

class WelcomePage extends Component {
  handleScroll = evt => {
    console.log('scrolling on welcome', evt.target);
    // const coordinates = ReactDOM.findDOMNode(
    //   this.refs['scroll-container']
    // ).getBoundingClientRect(); //outputs <h3> coordinates

    // console.log('coordinates:', coordinates);
  };

  render() {
    return (
      <div className="welcome-page" onWheel={this.handleScroll}>
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
                    <span>sweater?</span>
                    <span>pair of jeans?</span>
                    <span>birthday gift?</span>
                    <span>watch?</span>
                    <span>party dress?</span>
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
          <div className="right-side">
            <div ref="scroll-container" className="scroll-container">
              <div className="scroll-item">item</div>
              <div className="scroll-item">item</div>
              <div className="scroll-item">item</div>
              <div className="scroll-item">item</div>
              <div className="scroll-item">item</div>
              <div className="scroll-item">item</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
