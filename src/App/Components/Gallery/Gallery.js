import React from 'react';
import styles from './Gallery.module.scss';
// import GalleryData from './GalleryData';

const Gallery = (props) => {

  console.log(props.mappedImages);

  const mappedImages = props.mappedImages

  const mapImages = (images) => {
    return mappedImages.map(({image}, i) => {
      return (
        <div className={styles.sideGalleryItems} key={i}>
          <img alt='Category' src={image} />
        </div>
      )
    })
  }

  return (
    <div className={styles.gallery}>

      <div className={styles.header}>{props.title}</div>

      <div className={styles.sidegallery}>

          {mapImages()}

      </div>
    </div>
  )
}

export default Gallery
