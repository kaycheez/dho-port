import React from 'react';

import styles from './Sidebar.module.scss';

const IGButton = () => {
  return (
    <a className={`${styles.hoveringButton} ${styles.ig}`} href="https://www.instagram.com/dho.cr2/" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
  )
}

export default IGButton