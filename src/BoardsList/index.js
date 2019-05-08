import React, { Component } from 'react';
import HorizontalList from '../HorizontalList';
import './BoardList.css';

class BoardsList extends Component {
  render() {
    const { pins } = this.props;
    return (
      <div className="board-list">
        <HorizontalList pins={pins} />
      </div>
    );
  }
}

export default BoardsList;
