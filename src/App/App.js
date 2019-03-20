import React, { Component } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import { CarouselBackground } from './Components/Carousel/CarouselBackground';
import MappedRoutes from './routes/mappedRoutes';
import routes from './routes/mappedRoutes';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
          <CarouselBackground>
              <Switch>
                <MappedRoutes routes={routes} />
              </Switch>
          </CarouselBackground>
          <Sidebar />
      </div>
    );
  }
}

export default App;
