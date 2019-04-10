import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';
import HamburgerIcon from './HamburgerIcon';

const Sidebar = props => {
  
  const [visibility, setVisibility] = useState({
    insideElement: { display: 'none' }
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
          <li key={i} className={`${styles.hoveringButton}`}>
            <Link to={route.path} >{route.title}</Link>
          </li>
        )
      })
    }
      
    return (
      <nav className={styles.sidebar}>
      <header className={`${styles.header}`}>
        <span className={`${styles.hoveringButton}`} onClick={(() => handleClick())}><HamburgerIcon showSidebar={props.showSidebar}/></span>
        <h1><Link to="/" className={`${styles.hoveringButton}`}>David Ho </Link></h1>
      </header>
      <section className={`${styles.section}`} style={visibility.insideElement}>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category} ${styles.hoveringButton}`}>Photo</span>
          <ul className={styles.categoryItems}>
            {mapPaths(routes)}
          </ul>
        </button>
      </section>
      <footer className={`${styles.footer}`} style={visibility.insideElement}>
        <EmailButton />
        <IGButton />
      </footer>
    </nav>
  )
}

export default withRouter(Sidebar);