import React, { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
// import MappedRoutes from './routes/mappedRoutes';
import MappedPageRoutes from './routes/MappedPageRoutes';

const App = () => {
  const [showSidebar, setShowSidebar] = useState('bye');

  return (
    <div className={styles.app}>
      {/* <MappedRoutes /> */}
      <MappedPageRoutes sidebar={showSidebar} />
      <Sidebar 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
}

export default App;
