import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.css';
import Nav from '../Nav';
import PinterestApi from '../PinterestApi';
import BoardsList from '../BoardsList';
import SearchForm from '../SearchForm';
import ImageItem from '../ImageItem';
import WelcomePage from '../WelcomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authCode: '',
      accessToken: '',
      userBoards: [],
      userPins: [],
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

    if (localStorage.userPins) {
      this.setState({
        userPins: JSON.parse(localStorage.userPins)
      });
    }

    if (localStorage.accessToken) {
      this.setState({ accessToken: localStorage.accessToken });

      // ONLY if boards & pins were not found, do we make a request
      if (!localStorage.userPins) {
        const pins = await PinterestApi.getUserPins(localStorage.accessToken);
        this.setState({ userPins: pins });
        localStorage.setItem('userPins', JSON.stringify(pins));
      }
      if (!localStorage.userBoards) {
        const boards = await PinterestApi.getUserBoards(
          localStorage.accessToken
        );
        this.setState({ userBoards: boards });
        localStorage.setItem('userBoards', JSON.stringify(boards));
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
  }

  toggleSearchBarView = () => {
    this.setState(st => ({ activeSearch: !st.activeSearch }));
  };

  onScroll = () => {
    console.log('scrolling from app');
  };

  render() {
    if (this.state.accessToken) {
      console.log(this.state.accessToken);
    }

    const {
      userBoards,
      savedSearches,
      recentSearches,
      activeSearch,
      accessToken,
      userPins
    } = this.state;
    let randomPins = [];
    if (userPins.length) {
      randomPins.push(userPins[5], userPins[1], userPins[10], userPins[7]);
    }

    return (
      <div className="App">
        {accessToken ? (
          <div>
            <Nav
              allowedAccess="true"
              handleActiveSearch={this.toggleSearchBarView}
            />
            <div>{activeSearch ? <SearchForm /> : null}</div>

            <h2 className="section-title">Your pins</h2>
            <BoardsList pins={userPins} />

            <h2 className="section-title">Your recent searches</h2>
            {/* PLACEHOLDER UNTIL WE GET THE DATA */}
            <BoardsList pins={randomPins} />

            <h2 className="section-title">Popular categories to search</h2>
            {/* PLACEHOLDER UNTIL WE GET THE DATA */}
            <BoardsList pins={randomPins} />
          </div>
        ) : (
          <ParallaxProvider>
            <WelcomePage />
          </ParallaxProvider>
        )}
      </div>
    );
  }
}

export default App;
