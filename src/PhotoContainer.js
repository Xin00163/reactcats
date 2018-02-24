import React, { Component } from 'react';

class PhotoContainer extends Component {
  render() {
    return (
      <div className='PhotoContainer'>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default PhotoContainer;
