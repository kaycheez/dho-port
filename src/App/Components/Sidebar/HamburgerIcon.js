import React from 'react'
import styles from './HamburgerIcon.module.scss'

const HamburgerIcon = props => {
  const toggleIcon = () => {
    if (props.showSidebar) {
      return styles.isActive
    } else {
      return 'null'
    }
  }

  return (
    <button className={`${styles.hamburger} ${toggleIcon()}`}>
      <span className={styles.hamburgerInner}></span>
    </button>
  )
}

export default HamburgerIcon;