import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import GalleryData from './GalleryData';
import config from '../../assets/config';
import AWS from 'aws-sdk';

const Gallery = (props) => {

  return (
    <div className={styles.gallery}>

      <div className={styles.header}>{props.title}</div>

      <div className={styles.sidegallery}>

        <GalleryData 
          imageLength={props.imageLength} 
          fetchCategory={props.title}
          />

      </div>
    </div>
  )
}

export default Gallery
