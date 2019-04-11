import React, { useState, useEffect, useContext } from 'react';
import styles from './Sidebar.module.scss';
import { Link, NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';
import HamburgerIcon from './HamburgerIcon';
import { SlidesContext } from '../../Context/SlidesContext';

const Sidebar = (props) => {
  
  const { showSidebar, setShowSidebar } = useContext(SlidesContext);

  const [visibility, setVisibility] = useState({
    insideElement: { display: 'flex' },
    isDark: null
  })


  useEffect(() => {
    // default state of homepage is hidden sidebar
    if (props.location.pathname === '/') {
      toggleSidebar();
    } else {
      if (!showSidebar) {
        toggleSidebar();
      }
      setVisibility({ isDark: styles.isDark})
    }
  }, [props.location.pathname])


  // menu/back button functionality
  const handleClick = () => {
    if (props.location.pathname === '/') {
      toggleSidebar();
    } else {
      props.history.goBack();
    }
  }
  
  const toggleSidebar = () => {
    if (showSidebar) {
      setVisibility({insideElement: { display: 'none' }});
    } else {
      setVisibility({insideElement: { display: 'flex' }});
    }
        
    setShowSidebar(!showSidebar);
    }

    const mapPaths = (options) => {
      return options.map((route, i) => {
        return (
          <div key={i} className={`${styles.categoryItem}`} >
            <NavLink 
              className={`${styles.hoveringButton} ${styles.hoveringButtonList}`}
              activeClassName={`${styles.hoveringButtonActive}`}
              to={route.path} 
            >{route.title}</NavLink>
          </div>
        )
      })
    }
      
    return (
      <nav className={`${styles.sidebar} ${visibility.isDark}`}>
      <header className={`${styles.header}`}>
        <span className={`${styles.hoveringButton}`} onClick={(() => handleClick())}><HamburgerIcon path={props.location.pathname} showSidebar={props.showSidebar}/></span>
        <Link to="/" className={`${styles.hoveringButton}`}>
          <h1 className={`${styles.title}`}>
            <span>Visuals By</span>
            <span>David Ho</span>
          </h1>
        </Link>
      </header>
      <section className={`${styles.section}`} style={visibility.insideElement}>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category}`}>Photo</span>
          <div className={styles.categoryItems}>
            {mapPaths(routes)}
          </div>
        </button>
      </section>
      <footer className={`${styles.footer}`} style={visibility.insideElement}>
        <IGButton />
        <EmailButton />
      </footer>
    </nav>
  )
}

export default withRouter(Sidebar);