import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const examplePhotoCtgy = ['Weddings', 'Corporate', 'Portrait'];
  const exampleVideoCtgy = ['Weddings', 'Dance'];


  const mapList = (options) => {
    return options.map((option, i) => {
      return (
        <a href="#" className={`${styles.hoveringButton}`} key={i}>{option}</a>
      )
    })
  }

  const renderCategory = (category, options) => {
    return (
      <>
        <button className={styles.categoryContainer}>
          <span className={`${styles.category} ${styles.hoveringButton}`}>{category}</span>
          <div className={styles.dropdown}>
            {mapList(options)}
          </div>
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
        {renderCategory('Photo', examplePhotoCtgy)}
        {renderCategory('Video', exampleVideoCtgy)}
      </section>
      <footer className={`${styles.footer}`}>
        <a href="#" className={`${styles.hoveringButton}`}>Contact</a>
      </footer>
    </nav>
  )
}

export default Sidebar;