import React, { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import MappedPageRoutes from './routes/MappedPageRoutes';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={styles.app}>
      <MappedPageRoutes sidebar={showSidebar} />
      <Sidebar 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
}

export default App;
