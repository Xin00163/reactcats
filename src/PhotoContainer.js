import React, { Component } from 'react';
import images from './images';
import avatars from './avatars';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.imageLink = this.props.data.imageLink.split('.')[0];
    this.userIconLink = this.props.data.userIconLink.split('.')[0];
  }

  render() {
    return (
      <div className='PhotoContainer'>
        <img src={avatars[this.userIconLink]} />
        <div className="Username">
          {this.props.data.username}
        </div>
        <img src={images[this.imageLink]} />
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default PhotoContainer;
