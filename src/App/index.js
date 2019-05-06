import React, { Component } from 'react';

import './App.css';
import Nav from '../Nav';
import PinterestApi from '../PinterestApi';
import BoardsList from '../BoardsList';
import SearchForm from '../SearchForm';
import ImageItem from '../ImageItem';

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
    /** For development (bc we are not yet approved, we are limited to 10 calls per hour)
     *      to save our calls, we will store our boards in local storage to avoid a new call each time
     *
     * */

    // on initial page load, check local storage for boards, if none, check for access token

    if (localStorage.userBoards) {
      this.setState({ userBoards: JSON.parse(localStorage.userBoards) });
    }

    if (localStorage.accessToken) {
      this.setState({ accessToken: localStorage.accessToken });

      // ONLY if boards were not found, do we make a request
      if (!localStorage.userBoards) {
        const boards = await PinterestApi.getUserBoards(
          localStorage.accessToken
        );
        this.setState({ userBoards: boards });
        localStorage.setItem('userBoards', JSON.stringify(boards));

        const pins = await PinterestApi.getUserPins(
          localStorage.accessToken,
          boards
        );
      }
    } else {
      // if access token is not saved, check if we have an authCode then get accessToken
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

        <h2 className="section-title">Your recent searches</h2>

        {/* PLACEHOLDER UNTIL WE GET THE DATA */}
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            width: '80vw',
            justifyContent: 'center'
          }}
        >
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
        </div>
        <h2 className="section-title">Popular categories to search</h2>
        {/* PLACEHOLDER UNTIL WE GET THE DATA */}
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            width: '80vw',
            justifyContent: 'center'
          }}
        >
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
          <ImageItem name="placeholder" />
        </div>

        <h2 className="section-title">Your boards</h2>
        <BoardsList boards={userBoards} />

        {/* <h3>{loadingMoreGifs ? 'Loading more...' : ''}</h3> */}
      </div>
    );
  }
}

export default App;
