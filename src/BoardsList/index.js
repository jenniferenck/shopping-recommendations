import React, { Component } from 'react';
import HorizontalList from '../HorizontalList';

class BoardsList extends Component {
  render() {
    return (
      <div>
        <HorizontalList boards={this.props.boards} />
      </div>
    );
  }
}

export default BoardsList;
