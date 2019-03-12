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
        <div className={styles.carouselApp}>
          <CarouselBackground>
              <Switch>
                <MappedRoutes routes={routes} />
              </Switch>
          </CarouselBackground>
        </div>

        <div className={styles.sidebarApp}>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
