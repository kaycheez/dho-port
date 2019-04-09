import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import Slider from 'react-slick';

const Subgallery = (props) => {

  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);

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

  const clickHandler = (event) => {
    let picIndex = event.currentTarget.dataset.index;
    let picArray = props.images;
    
    let slideShowArray = picArray.splice(picIndex).concat(picArray.splice(0, picIndex));
    console.log(slideShowArray);

  }


  const mapImages = () => {
    return props.images.map((image, i) => {
      return (
          <div className={styles.sideGalleryItems} key={i} onClick={clickHandler} data-index={i} >
              <img 
                alt='Category' 
                src={image} 
                className={!loading ? styles.loadedImages : styles.noLoadedImages}
                onLoad={() => handleStateChange(galleryElement)}
                key={i}
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

      <div className={!loading ? styles.loadedImages : styles.noLoadedImages} >
        {mapImages()}
      </div>

    </div>
  )

}

export default Subgallery;