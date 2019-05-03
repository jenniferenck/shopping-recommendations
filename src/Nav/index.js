import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import OAuthButton from '../OAuthButton';

class Nav extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>Search your favorite GIFs in one place!</h2>
        <SearchBar
          handleSearch={this.fetchGifs}
          handleReset={this.clearSearchResults}
        />
        <OAuthButton />
      </div>
    );
  }
}

export default Nav;
