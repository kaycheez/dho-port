import React, { Component } from 'react';
import './App.scss';
import { CarouselBackground } from '../Carousel/CarouselBackground';
import MappedRoutes from '../routes/mappedRoutes';
import routes from '../routes/mappedRoutes';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselBackground>
          <Switch>
            <MappedRoutes routes={routes} />
          </Switch>
        </CarouselBackground>
      </div>
    );
  }
}

export default App;
