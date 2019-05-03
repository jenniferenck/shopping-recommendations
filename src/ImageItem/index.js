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
    const { name, id, url } = this.props;
    return (
      <div className="image-item">
        {/* <img src={imageUrl} alt={title} /> */}
        <div className="text-overlay">
          {/* <i
            onClick={this.toggleFavorite}
            className={`far fa-heart ${favorited ? 'favorited' : ''}`}
          /> */}
          <div>{name}</div>
        </div>
      </div>
    );
  }
}

export default ImageItem;
