import React from 'react';
import styles from './Gallery.module.scss';

const GalleryData = (props) => {

  let path = props.fetchCategory;
  let title = path.substring(0, 1).toLowerCase() + path.substring(1, path.length);
  

  const mappedImages = [];
  const amazonUrl = 'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos';

  // Pushes the links into the array, mappedImages, so that it can be mapped out
  for (let i = 1; i <= props.imageLength; i++) {
    mappedImages.push({image: `${amazonUrl}/${title}/${title}${i}.webp`})
  }

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