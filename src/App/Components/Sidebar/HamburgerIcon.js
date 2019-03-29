import React from 'react'
import styles from './HamburgerIcon.module.scss'

const HamburgerIcon = () => {
  return (
    <button className={styles.hamburger}>
      <span className={styles.hamburgerInner}></span>
    </button>
  )
}

export default HamburgerIcon;