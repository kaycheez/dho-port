import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';
import EmailButton from './EmailButton';
import IGButton from './IGButton';

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
        <h1><Link to="/" className={`${styles.hoveringButton}`}>DAVID HO</Link></h1>
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

export default Sidebar;