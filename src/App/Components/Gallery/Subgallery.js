import React from 'react';
import styles from './Gallery.module.scss';

const Subgallery = (props) => {

  // Variable used for ref
  let galleryElement;

  // Once all pictures have been completed, return true
  const imagesLoaded = (parentNode) => {
    const imgElements = parentNode.querySelectorAll("img")
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }

  // Gets the index from picture to start the <Slideshow />
  const clickHandler = (event) => {
    let picIndex = event.currentTarget.dataset.index;
    let picArray = props.images;
    props.setSlidesArr(picArray.splice(picIndex).concat(picArray.splice(0, picIndex)));
    props.setShowSlides(true);
  }

  const mapImages = () => {
    return props.images.map((image, i) => {
      return (
          <div className={styles.sideGalleryItems} key={i} onClick={clickHandler} data-index={i} >
              <img 
                alt='Category' 
                src={image} 
                className={!props.loading ? styles.loadedImages : styles.noLoadedImages}
                onLoad={() => handleStateChange(galleryElement)}
                key={i}
              />
          </div>
      )
    })
  }

  // Once all pictures have been completed, set state to false
  const handleStateChange = (galleryElement) => {
    props.setLoading(!imagesLoaded(galleryElement))
  }

  return (
    <div className={styles.sidegallery}>
      <div ref={element => galleryElement = element}>
        <div className={!props.loading ? styles.loadedImages : styles.noLoadedImages} >
         
          {mapImages()}
        
        </div>
      </div>
    </div>
  )
}

export default Subgallery;