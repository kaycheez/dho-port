import React, { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import MappedPageRoutes from './routes/MappedPageRoutes';
import { SlidesContext } from './Context/SlidesContext';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  // If true, show the slideshow
  const [showSlides, setShowSlides] = useState(false);

  const currentPage = window.location.href;
  let path = currentPage.substring(22, currentPage.length);

  return (
    <div className={styles.app}>
      <SlidesContext.Provider 
        value={{
          showSlides, 
          setShowSlides, 
          showSidebar, 
          setShowSidebar, 
          path }} >
        
        <MappedPageRoutes />
        <Sidebar />
        
      </SlidesContext.Provider>
    </div>
  );
}

export default App;
