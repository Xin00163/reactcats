import React, { Component } from 'react';
import images from './images';
import avatars from './avatars';
import './PhotoContainer.css';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.imageLink = this.props.data.imageLink.split('.')[0];
    this.userIconLink = this.props.data.userIconLink.split('.')[0];

    this.state = {
      likes: this.props.data.likes,
      liked: this.props.data.liked
    };
    this.likeClick = this.likeClick.bind(this);
  }

  likeClick(e) {
    e.preventDefault();

    this.setState(prevState => {

      // console.log(prevState.like)
      if (!prevState.liked) {
        return {
          likes: prevState.likes + 1,
          liked: !prevState.liked
        }
      }
    });
  }


  render() {
    return (
      <div className='PhotoContainer'>
        <div className='User'>
          <img className='Avatar' src={avatars[this.userIconLink]} />
          <h2 className='Username'>{this.props.data.username}</h2>
        </div>
        <img className='Image' src={images[this.imageLink]} />
        <div className='Like'>
          <i id='Click-like' onClick={this.likeClick} className={(this.state.liked ? "fa fa-heart" : "fa fa-heart-o")}></i>
          <span className='Likes'>{this.state.likes}</span>
        </div>
        <div className='Description'>{this.props.data.description}</div>
      </div>
    );
  }
}

export default PhotoContainer;
