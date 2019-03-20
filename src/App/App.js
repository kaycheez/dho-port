import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import { CarouselBackground } from './Components/Carousel/CarouselBackground';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <CarouselBackground />
      <Sidebar />
    </div>
  );
}

export default App;
