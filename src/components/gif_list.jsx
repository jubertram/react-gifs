import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  render() {
    const { gifs, select } = this.props;
    return gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} selectFunction={select} />;
    });
  }
}

export default GifList;
