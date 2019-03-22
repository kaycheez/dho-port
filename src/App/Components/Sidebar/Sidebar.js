import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';

const Sidebar = props => {
  const [showSidebar, setShowSidebar] = useState(false);

  
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
      setShowSidebar(!showSidebar);
      console.log(props);
    } else {
      props.history.goBack();
    }
  }
  
  
  return (
    <nav className={styles.sidebar}>
      <header className={`${styles.header}`}>
        <span className={`${styles.hoveringButton}`} onClick={(() => handleClick())}>X</span>
        <h1><Link to="/" className={`${styles.hoveringButton}`}>DAVIDHO</Link></h1>
      </header>
      <section className={styles.section}>
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
      <footer className={`${styles.footer}`}>
        <EmailButton />
        <IGButton />
      </footer>
    </nav>
  )
}

export default withRouter(Sidebar);