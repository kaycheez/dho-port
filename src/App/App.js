import React, { Component } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Sidebar />
      </div>
    );
  }
}

export default App;
