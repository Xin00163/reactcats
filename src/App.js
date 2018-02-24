import React, { Component } from 'react';
import './App.css';
// import avatars from './avatars';
import PhotoContainer from './PhotoContainer';
import photoCardsData from './photoCardsData.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {photoCardsData.map((data) => (
          <PhotoContainer data={data}/>
        ))}
      </div>
    );
  }
}

export default App;
