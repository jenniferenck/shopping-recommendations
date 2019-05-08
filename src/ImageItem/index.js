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
    const { id, note, url, image, board } = this.props;
    return (
      <div className="image-item">
        <img src={image} alt={note} />
        <div className="text-overlay">
          {/* <i
            onClick={this.toggleFavorite}
            className={`far fa-heart ${favorited ? 'favorited' : ''}`}
          /> */}
          <div>{board}</div>
        </div>
      </div>
    );
  }
}

export default ImageItem;
