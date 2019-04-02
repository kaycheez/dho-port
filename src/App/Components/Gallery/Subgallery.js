import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import LazyLoad from 'react-lazyload';

const imagesLoaded = (parentNode) => {
  const imgElements = parentNode.querySelectorAll("img")
  for (let i = 0; i < imgElements.length; i++) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

const Subgallery = (props) => {

  const [loading, setLoading] = useState(null);
  let galleryElement;


  const mapImages = () => {
    return props.images.map((image, i) => {
      return (
          <div className={styles.sideGalleryItems} key={i}>

              <img alt='Category' className={!loading ? styles.loadedImages : styles.noLoadedImages} src={image} onLoad={() => handleStateChange(galleryElement)}/>
          </div>

      )
    })
  }

  // const renderSpinner = () => {
  //   if (!loading) {
  //     return <span className={styles.noSpinner} />
  //   } else {
  //     return <span className={styles.spinner} />
  //   }
  // }

  const handleStateChange = (galleryElement) => {
    setLoading(!imagesLoaded(galleryElement))
  }

  return (
    <div ref={element => galleryElement = element}>
    {/* {renderSpinner()} */}
      <div>
        {mapImages()}
      </div>
    </div>
  )

}

export default Subgallery;