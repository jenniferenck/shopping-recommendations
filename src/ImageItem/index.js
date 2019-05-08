import React, { Component } from 'react';
import './ImageItem.css';

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  // pass the opposite of the current state to tell the add or remove whether to remove or add
  toggleFavorite(evt) {
    this.props.handleAddOrRemoveFav(this.props, !this.props.favorited);
  }

  render() {
    const { note, image, board } = this.props;
    return (
      <div className="image-item">
        {image ? (
          <img src={image} alt={note} />
        ) : (
          <div className="sk-fading-circle">
            <div className="sk-circle1 sk-circle" />
            <div className="sk-circle2 sk-circle" />
            <div className="sk-circle3 sk-circle" />
            <div className="sk-circle4 sk-circle" />
            <div className="sk-circle5 sk-circle" />
            <div className="sk-circle6 sk-circle" />
            <div className="sk-circle7 sk-circle" />
            <div className="sk-circle8 sk-circle" />
            <div className="sk-circle9 sk-circle" />
            <div className="sk-circle10 sk-circle" />
            <div className="sk-circle11 sk-circle" />
            <div className="sk-circle12 sk-circle" />
          </div>
        )}
        <div className="text-overlay">
          <div>{board}</div>
        </div>
      </div>
    );
  }
}

export default ImageItem;
