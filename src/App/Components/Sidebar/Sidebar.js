import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';

const Sidebar = () => {

  const mapPaths = (options) => {
    return options.map((route, i) => {
      return (
        <li key={i} className={`${styles.hoveringButton}`}>
          <Link to={route.path} >{route.title}</Link>
        </li>
      )
    })
  }

  const renderCategory = (category, options) => {
    return (
      <>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category} ${styles.hoveringButton}`}>{category}</span>
          <ul className={styles.dropdown}>
            {mapPaths(options)}
          </ul>
        </button>
      </>
    )
  }


  return (
    <nav className={styles.sidebar}>
      <header className={`${styles.header}`}>
        <h1><Link to="/" className={`${styles.hoveringButton}`}>VISUALS BY DAVID HO</Link></h1>
      </header>
      <section className={styles.section}>
        {renderCategory('Photo', routes)}
        {renderCategory('Video', routes)}
      </section>
      <footer className={`${styles.footer}`}>
        <a href="#" className={`${styles.hoveringButton}`}>Contact</a>
      </footer>
    </nav>
  )
}

export default Sidebar;