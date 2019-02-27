import React, { Component } from 'react';
import './App.scss';
import {CarouselBackground} from '../Carousel/CarouselBackground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselBackground />
      </div>
    );
  }
}

export default App;
