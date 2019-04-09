import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { Link, NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';
import HamburgerIcon from './HamburgerIcon';

const Sidebar = props => {
  
  const [visibility, setVisibility] = useState({
    insideElement: { display: 'flex' }
  })


  useEffect(() => {
    // default state of homepage is hidden sidebar
    if (props.location.pathname === '/') {
      toggleSidebar();
    } else {
      if (!props.showSidebar) {
        toggleSidebar();
      }
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
    if (props.showSidebar) {
      setVisibility({insideElement: { display: 'none' }});
    } else {
      setVisibility({insideElement: { display: 'flex' }});
    }
        
    props.setShowSidebar(!props.showSidebar);
    }
    
    const mapPaths = (options) => {
      return options.map((route, i) => {
        return (
            <NavLink 
              key={i}
              className={`${styles.hoveringButton} ${styles.hoveringButtonList}`}
              activeClassName={`${styles.hoveringButtonActive}`}
              to={route.path} 
            >{route.title}</NavLink>
        )
      })
    }
      
    return (
      <nav className={styles.sidebar}>
      <header className={`${styles.header}`}>
        <span className={`${styles.hoveringButton}`} onClick={(() => handleClick())}><HamburgerIcon showSidebar={props.showSidebar}/></span>
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