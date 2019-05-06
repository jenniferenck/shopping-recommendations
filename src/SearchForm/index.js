import React, { Component } from 'react';
import './SearchForm.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { handleReset, handleFavoritesView, favoritesView } = this.props;
    return (
      <div className="search-form-container">
        <form onSubmit={this.handleSubmit} id="search-form">
          <div id="step-1">
            <label htmlFor="">Keyword search</label>
            <input
              type="text"
              placeholder="I'm shopping for...."
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />

            <label htmlFor="">Select a board</label>
            <select name="boards" id="">
              {/* map thru boards here */}
            </select>

            <label htmlFor="">Select a category</label>
          </div>

          <div id="step-2" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
