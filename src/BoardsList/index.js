import React, { Component } from 'react';
import HorizontalList from '../HorizontalList';
import './BoardList.css';

class BoardsList extends Component {
  render() {
    return (
      <div className="board-list">
        <HorizontalList boards={this.props.boards} />
      </div>
    );
  }
}

export default BoardsList;
