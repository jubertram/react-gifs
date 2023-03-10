import React, { Component } from 'react';
import giphy from "giphy-api";
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "du3J3cXyzhj75IOgvA"
    };
    this.search("code");
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
    const { selectGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} select={this.select} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
