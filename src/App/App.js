import React, { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import MappedPageRoutes from './routes/MappedPageRoutes';
import { SlidesContext } from './Context/SlidesContext';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSlides, setShowSlides] = useState(false);

  return (
    <div className={styles.app}>
      <SlidesContext.Provider value={{showSlides, setShowSlides, showSidebar, setShowSidebar}} >
        
        <MappedPageRoutes />
        <Sidebar />
        
      </SlidesContext.Provider>
    </div>
  );
}

export default App;
