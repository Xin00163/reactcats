import React, { Component } from 'react';
import images from './images';
import avatars from './avatars';
import './PhotoContainer.css';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.imageLink = this.props.data.imageLink.split('.')[0];
    this.userIconLink = this.props.data.userIconLink.split('.')[0];
  }

  render() {
    return (
      <div className='PhotoContainer'>
        <div className='User'>
          <img className='Avatar' src={avatars[this.userIconLink]} />
          <div className="Username">{this.props.data.username}</div>
        </div>
        <img className="Image" src={images[this.imageLink]} />
        <div className="Description">{this.props.data.description}</div>
      </div>
    );
  }
}

export default PhotoContainer;
