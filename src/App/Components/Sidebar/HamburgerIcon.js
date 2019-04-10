import React, { useEffect, useState } from 'react';
import styles from './HamburgerIcon.module.scss';

const HamburgerIcon = props => {
  const [isDark, setIsDark] = useState(null)

  useEffect(() => {
    if (props.path !== '/') {
      setIsDark(styles.isDark)
    } else {
      setIsDark(null)
    }
  }, [props.path])

  const toggleIcon = () => {
    if (props.showSidebar) {
      return styles.isActive
    } else {
      return 'null'
    }
  }

  return (
    <button className={`${styles.hamburger} ${toggleIcon()} ${isDark}`}>
      <span className={styles.hamburgerInner}></span>
    </button>
  )
}

export default HamburgerIcon;