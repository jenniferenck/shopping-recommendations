import React, { Component } from 'react';

import './App.css';
import GifList from '../GifList';
import SearchBar from '../SearchBar';
import OAuthButton from '../OAuthButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  // on initial page load, fetch trending Gifs and check localStorage for any favorites
  async componentDidMount() {
    // const trendingGifs = await GiphyApi.fetchTrendingGifs();
    // this.setState({ trendingGifs: trendingGifs.data });

    // check localStorage, parse and set favorited Gifs array
    if (localStorage.favorites) {
      const storedFavorites = localStorage.getItem('favorites');
      const favoritesObj = JSON.parse(storedFavorites);
      this.setState({ favoritedGifs: favoritesObj });
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
        <div className="App-header">
          <h2>Search your favorite GIFs in one place!</h2>
          <SearchBar
            handleSearch={this.fetchGifs}
            handleReset={this.clearSearchResults}
            handleFavoritesView={this.toggleFavoritesView}
            favoritesView={favoritesView}
          />
          <OAuthButton />
        </div>
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
