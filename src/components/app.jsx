import React, { Component } from 'react';
import SearchBar  from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from "giphy-api";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "tsX3YMWYzDPjAARfeg"
    };
  }

  select = (query) => {
    const id = query.split('/')[4];
    this.setState({
      selectGifId: id
    });
  };

  search = (query) => {
    giphy('RGhzjJJsOPq3vsmSjnWLP1KX3ql1UYPZ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} select={this.select} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
