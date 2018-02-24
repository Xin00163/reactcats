import React, { Component } from 'react';
import images from './images';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.imageLink = this.props.data.imageLink.split('.')[0];
  }

  render() {
    return (
      <div className='PhotoContainer'>
        <img src={images[this.imageLink]} />
      </div>
    );
  }
}

export default PhotoContainer;
