import React, { Component } from 'react';
import ImageItem from '../ImageItem';
import { CSSTransitionGroup } from 'react-transition-group';

import './HorizontalList.css';

class HorizontalList extends Component {
  render() {
    const { pins } = this.props;
    return (
      <div className="horizontal-list-section">
        {pins.length ? (
          pins.map(pin => (
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}
              key={pin.id}
            >
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
            </CSSTransitionGroup>
          ))
        ) : (
          <div>
            <ImageItem key="1" />
            <ImageItem key="2" />
            <ImageItem key="3" />
            <ImageItem key="4" />
          </div>
        )}
        <ImageItem key="5" />
      </div>
    );
  }
}

export default HorizontalList;
