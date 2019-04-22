import React, { useEffect, useState, useContext } from 'react';
import styles from './HamburgerIcon.module.scss';
import { SlidesContext } from '../../Context/SlidesContext';

const HamburgerIcon = props => {
  const { showSidebar } = useContext(SlidesContext);
  const [isDark, setIsDark] = useState(null)

  useEffect(() => {
    if (props.path !== '/') {
      setIsDark(styles.isDark)
    } else {
      setIsDark(null)
    }
  }, [props.path])

  const toggleIcon = () => {
    if (showSidebar) {
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