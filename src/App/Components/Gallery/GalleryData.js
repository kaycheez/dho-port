import React from 'react';
import styles from './Gallery.module.scss';

const GalleryData = (props) => {

  const mapImages = (images) => {
    return images.map(({ image, name, path }, i) => {
      return (
        <div className={styles.sideGalleryItems} key={i}>
          <img alt={name} src={image} />
        </div>
      )
    })
  }

  return (
    <>
      {mapImages(props.images)}
    </>
  )
}

export default GalleryData