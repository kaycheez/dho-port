import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';

const Sidebar = props => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visibility, setVisibility] = useState({ display: 'none' })


  
  const mapPaths = (options) => {
    return options.map((route, i) => {
      return (
        <li key={i} className={`${styles.hoveringButton}`}>
          <Link to={route.path} >{route.title}</Link>
        </li>
      )
    })
  }

  const handleClick = () => {
    if (props.location.pathname === '/') {
      hideSidebar();
    } else {
      props.history.goBack();
    }
  }

  const hideSidebar = () => {
    if (showSidebar) {
      setVisibility({ display: 'none' });
    } else {
      setVisibility({ display: 'flex' });
    }
    setShowSidebar(!showSidebar);
  }
  
  
  return (
    <nav className={styles.sidebar}>
      <header className={`${styles.header}`}>
        <span className={`${styles.hoveringButton}`} onClick={(() => handleClick())}>X</span>
        <h1><Link to="/" className={`${styles.hoveringButton}`}>DAVIDHO</Link></h1>
      </header>
      <section className={`${styles.section}`} style={visibility}>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category} ${styles.hoveringButton}`}>Photo</span>
          <ul className={styles.categoryItems}>
            {mapPaths(routes)}
          </ul>
        </button>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category} ${styles.hoveringButton}`}>Video</span>
          <ul className={styles.categoryItems}>
            {mapPaths(routes)}
          </ul>
        </button>
      </section>
      <footer className={`${styles.footer}`} style={visibility}>
        <EmailButton />
        <IGButton />
      </footer>
    </nav>
  )
}

export default withRouter(Sidebar);