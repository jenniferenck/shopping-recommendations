import React, { Component } from 'react';
import HorizontalList from '../HorizontalList';
import './BoardList.css';

class BoardsList extends Component {
  render() {
    const { boards, pins } = this.props;
    return (
      <div className="board-list">
        <HorizontalList boards={boards} pins={pins} />
      </div>
    );
  }
}

export default BoardsList;
