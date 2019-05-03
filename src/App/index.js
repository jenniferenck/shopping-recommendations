import React, { Component } from 'react';

import './App.css';
import GifList from '../GifList';
import Nav from '../Nav';
import PinterestApi from '../PinterestApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authCode: '',
      accessToken: '',
      trendingGifs: [],
      recentSearchGifs: [],
      favoritedGifs: {},
      activeSearch: false,
      activeModal: false,
      favoritesView: false,
      currentSearchTerm: '',
      offset: 25,
      loadingMoreGifs: false
    };
  }

  async componentDidMount() {
    // on initial page load, check if we have an access code, if NOT, display button to request

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      const authCode = urlParams.get('code');
      this.setState({ authCode: urlParams.get('code') });

      // If we have a code, send API request to get access token
      if (authCode) {
        const accessToken = await PinterestApi.getAccessToken(authCode);
        this.setState({ accessToken: accessToken });

        // set to localStorage
      }
    }

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  //  Replace this with 'fetchBoards'

  // API request for gifs that meet search term
  // async fetchGifs(searchTerm) {
  //   this.setState({ activeSearch: true });
  //   const searchResults = await GiphyApi.fetchGifs(searchTerm);
  //   this.setState({
  //     recentSearchGifs: searchResults.data,
  //     currentSearchTerm: searchTerm
  //   });
  // }

  onScroll = () => {
    const {
      fetchMoreGifs,
      state: {
        loadingMoreGifs
        // hasMore,
      }
    } = this;

    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
    // || !hasMore (for later implementation)
    if (loadingMoreGifs) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // fetchMoreGifs(this.state.offset);
    }
  };

  // example below handles pagination and infinite scroll

  // fetches more gifs with current offset and adds to trending/ recentsearch
  // async fetchMoreGifs() {
  //   this.setState({ loadingMoreGifs: true });
  //   const moreGifs = await GiphyApi.fetchMoreGifs(this.state.offset);
  //   // update offset increment by 25 and add new gifs to list
  //   this.setState(st => ({
  //     offset: st.offset + 25,
  //     trendingGifs: [...st.trendingGifs, ...moreGifs],
  //     loadingMoreGifs: false
  //   }));
  // }

  render() {
    if (this.state.accessToken) {
      console.log(this.state.accessToken);
    }

    const {
      recentSearchGifs,
      trendingGifs,
      favoritesView,
      currentSearchTerm,
      favoritedGifs,
      activeSearch,
      loadingMoreGifs
    } = this.state;
    return (
      <div className="App">
        <Nav />
        <h3 className="gif-list-header">
          {activeSearch
            ? `GIPHY results for: #${currentSearchTerm}`
            : favoritesView
            ? 'My favorites...'
            : "What's Trending..."}
        </h3>

        <GifList
          handleAddOrRemoveFav={this.addOrRemoveFavorite}
          gifs={activeSearch ? recentSearchGifs : trendingGifs}
          favoritedGifs={favoritedGifs}
          favoritesView={favoritesView}
        />
        <h3>{loadingMoreGifs ? 'Loading more...' : ''}</h3>
      </div>
    );
  }
}

export default App;
