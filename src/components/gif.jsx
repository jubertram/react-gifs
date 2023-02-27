import React, { Component } from "react";

class Gif extends Component {
  handleModified = (event) => {
    const { selectFunction } = this.props;
    selectFunction(event.target.src);
  };

  render () {
    const { id } = this.props;
    const src = `https://media3.giphy.com/media/${id}/giphy.gif?cid=ecf05e470af30b2a9d4853e38b0e4bccce5aafcf135ffeae&rid=giphy.gif&ct=g`;
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleModified} />
    );
  }
}

export default Gif;
