import React, { Component } from 'react';
import SearchBar  from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "tsX3YMWYzDPjAARfeg"
    }
  }
  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className='selected-gif'>
            <Gif id={this.state.selectGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
