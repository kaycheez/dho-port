import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = props => {
  const examplePhotoCtgy = ['Weddings', 'Corporate', 'Portrait'];
  const exampleVideoCtgy = ['Weddings', 'Dance'];


  const mapList = (options) => {
    return options.map((option, i) => {
      return (
        <a href="#" className={styles.option} key={i}>{option}</a>
      )
    })
  }

  const renderCategory = (category, options) => {
    return (
      <Fragment>
        <button className={styles.categoryContainer}>
          <span className={styles.category}>{category}</span>
          <div className={styles.dropdown}>
            {mapList(options)}
          </div>
        </button>
      </Fragment>
    )
  }


  return (
    <nav className={styles.sidebar}>
      <header className={styles.header}>
        <h1><a href="#">VISUALS BY DAVID HO</a></h1>
      </header>
      <section className={styles.section}>
        {renderCategory('Photo', examplePhotoCtgy)}
        {renderCategory('Video', exampleVideoCtgy)}
      </section>
      <footer className={styles.footer}>
        <a href="#">Contact</a>
      </footer>
    </nav>
  )
}

export default Sidebar;