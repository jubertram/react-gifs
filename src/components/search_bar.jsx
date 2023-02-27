import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const { search } = this.props;
    search(event.target.value);
  }

  render () {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleChange} placeholder="Recherche un GIF..." />
    );
  }
}

export default SearchBar;
