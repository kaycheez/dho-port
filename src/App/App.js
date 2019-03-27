import React, { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import MappedRoutes from './routes/mappedRoutes';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={styles.app}>
      <MappedRoutes />
      <Sidebar 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
}

export default App;
