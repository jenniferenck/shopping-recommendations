import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.handleDoubleTap = this.handleDoubleTap.bind(this);
  }

  handleDoubleTap(evt) {
    evt.preventDefault();
    console.log('double tapped!');
  }

  render() {
    const { title, source, imageUrl, rating } = this.props;
    return (
      <div className="gif" onDoubleClickCapture={this.handleDoubleTap}>
        <img src={imageUrl} alt={title} />
        <div className="text-overlay">
          <i className="far fa-heart" />
          <div>
            <h4>Title:</h4>
            <p>{title.length ? title : 'Not available'}</p>
          </div>
          <div>
            <h4>Rating:</h4>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
