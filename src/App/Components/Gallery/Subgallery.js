import React, { useState } from 'react';
import styles from './Gallery.module.scss';

const Subgallery = (props) => {

  const [loading, setLoading] = useState(null);
  let galleryElement;

  // Once all pictures have been completed, return true
  const imagesLoaded = (parentNode) => {
    const imgElements = parentNode.querySelectorAll("img")
    for (let i = 0; i < imgElements.length; ++i) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }


  const mapImages = () => {
    return props.images.map((image, i) => {
      return (
          <div className={styles.sideGalleryItems} key={i}>
              <img 
                alt='Category' 
                src={image} 
                className={!loading ? styles.loadedImages : styles.noLoadedImages} 
                onLoad={() => handleStateChange(galleryElement)} 
              />
          </div>

      )
    })
  }

  // Once all pictures have been completed, set state to false
  const handleStateChange = (galleryElement) => {
    setLoading(!imagesLoaded(galleryElement))
  }

  return (
    <div ref={element => galleryElement = element}>

      <div>
        {mapImages()}
      </div>

    </div>
  )

}

export default Subgallery;