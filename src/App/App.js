import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import MappedRoutes from './routes/mappedRoutes';

const App = () => {
  return (
    <div className={styles.app}>
      <MappedRoutes />
      <Sidebar />
    </div>
  );
}

export default App;
