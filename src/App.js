import React, { Component } from 'react';
import './App.css';
import images from './images';
import PhotoContainer from './PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Object.keys(images).map((key) => (
          <PhotoContainer image={images[key]}/>
        ))}
      </div>
    );
  }
}

export default App;
