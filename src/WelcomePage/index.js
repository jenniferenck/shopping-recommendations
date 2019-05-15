import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from '../Button';

import './WelcomePage.css';

class WelcomePage extends Component {
  handleScroll = evt => {
    //outputs <scroll-container> coordinates
    const left = this.refs['scroll-container'].getBoundingClientRect().x;
    const top = this.refs['scroll-container'].getBoundingClientRect().top;

    console.log('coordinates:', top, left);
  };

  render() {
    return (
      <div className="welcome-page" onWheel={this.handleScroll}>
        <div className="welcome-page-body">
          <div className="welcome-logo">
            <h2>Mine.Now.</h2>
            <p>M|N</p>
          </div>
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

          <div className="background-images">
            <div ref="scroll-container" className="scroll-container">
              <div className="scroll-section">
                <div className="scroll-item">
                  <img src="../images/art-image.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>

                <div className="scroll-item">
                  <img
                    src="../images/background-cactus-decor-1470168.jpg"
                    alt="example-item"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/jewelry-img.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/DIY-img.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-item">
                  <img src="../images/food-img.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/fashion-image.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/palms-img.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/shapes-img.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img
                    src="../images/background-cactus-decor-1470168.jpg"
                    alt="example-item"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="scroll-item">
                  <img src="../images/green-art.jpg" alt="example-item" />
                  <div className="image-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
