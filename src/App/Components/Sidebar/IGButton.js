import React from 'react';
import cameraIcon from '../../assets/icons/camera.svg'
import styles from './Sidebar.module.scss';

const IGButton = () => {
  return (
    <a className={`${styles.hoveringButton}`} href="https://www.instagram.com/dho.cr2/" target="_blank" rel="noopener noreferrer">
      {/* <img src={cameraIcon} alt='Camera icon'/> */}
      Instagram
    </a>
  )
}

export default IGButton