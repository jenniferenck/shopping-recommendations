import React, { Component } from 'react';
import ImageItem from '../ImageItem';
import './HorizontalList.css';

class HorizontalList extends Component {
  render() {
    const { boards } = this.props;
    console.log(boards);
    return (
      <div className="gif-list-section">
        {boards.length ? (
          boards.map(board => (
            <ImageItem
              key={board.id}
              id={board.id}
              name={board.name}
              url={board.url}
            />
          ))
        ) : (
          <h2>Your boards are loading...</h2>
        )}
      </div>
    );
  }
}

export default HorizontalList;
