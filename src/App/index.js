import React, { Component } from 'react';

import './App.css';
import Nav from '../Nav';
import PinterestApi from '../PinterestApi';
import BoardsList from '../BoardsList';
import SearchForm from '../SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authCode: '',
      accessToken: '',
      userBoards: [],
      savedSearches: [],
      recentSearches: [],
      activeSearch: false,
      offset: 25,
      loadingMoreGifs: false
    };
  }

  async componentDidMount() {
    // on initial page load, check if we have an access code, if NOT, display button to request
    if (localStorage.accessToken) {
      this.setState({ accessToken: localStorage.accessToken });
    }

    // if access token is not saved, check if we have an authCode then get accessToken
    else {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams) {
        const authCode = urlParams.get('code');
        this.setState({ authCode: urlParams.get('code') });

        // If we have a code, send API request to get access token
        if (authCode) {
          // ADD error handling!
          const accessToken = await PinterestApi.getAccessToken(authCode);
          this.setState({ accessToken: accessToken });

          // set to localStorage
          localStorage.setItem('accessToken', accessToken);
        }
      }
    }

    if (localStorage.accessToken) {
      // get boards with accessToken and save to state and localStorage
      const boards = await PinterestApi.getUserBoards(localStorage.accessToken);
      this.setState({ userBoards: boards });
      localStorage.setItem('userBoards', JSON.stringify(boards));

      const pins = await PinterestApi.getUserPins(
        localStorage.accessToken,
        boards
      );
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

  toggleSearchBarView = () => {
    this.setState(st => ({ activeSearch: !st.activeSearch }));
  };

  render() {
    if (this.state.accessToken) {
      console.log(this.state.accessToken);
    }

    const {
      userBoards,
      savedSearches,
      recentSearches,
      activeSearch
    } = this.state;
    return (
      <div className="App">
        <Nav
          allowedAccess={this.state.accessToken ? true : false}
          handleActiveSearch={this.toggleSearchBarView}
        />
        {activeSearch ? <SearchForm /> : null}

        <h2>
          Temporary header while the following component lists are being
          constructed...
        </h2>
        <p>Saved Searches</p>
        <p>Recent Searches</p>
        <p>My boards</p>
        <BoardsList boards={userBoards} />

        {/* <h3>{loadingMoreGifs ? 'Loading more...' : ''}</h3> */}
      </div>
    );
  }
}

export default App;
