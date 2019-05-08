import React, { Component } from 'react';
import ImageItem from '../ImageItem';
import './HorizontalList.css';

class HorizontalList extends Component {
  render() {
    const { pins } = this.props;
    return (
      <div className="horizontal-list-section">
        {pins.length ? (
          pins.map(pin => (
            <ImageItem
              key={pin.id}
              id={pin.id}
              note={pin.note}
              url={pin.url}
              image={pin.image.original.url}
              board={pin.board.name}
              boardId={pin.board.id}
              boardUrl={pin.board.url}
            />
          ))
        ) : (
          <div>
            <ImageItem />
            <ImageItem />
            <ImageItem />
            <ImageItem />
          </div>
        )}
        <ImageItem />
      </div>
    );
  }
}

export default HorizontalList;
