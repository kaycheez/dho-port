import React, { useEffect } from 'react';
import styles from './Gallery.module.scss';

const GalleryData = (props) => {

  const mappedImages = [];
  const amazonUrl = 'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos';

  for (let i = 1; i <= props.imageLength; i++) {
    mappedImages.push({image: `${amazonUrl}/${props.fetchCategory}/${props.fetchCategory}${i}.webp`})
  }

  console.log(mappedImages);

  const mapImages = (images) => {
    return mappedImages.map(({ image, name, path }, i) => {
      return (
        <div className={styles.sideGalleryItems} key={i}>
          <img alt={name} src={image} />
        </div>
      )
    })
  }

  return (
    <>
      {mapImages()}
    </>
  )
}

export default GalleryData