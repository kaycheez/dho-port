import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import config from '../../assets/config';
import AWS from 'aws-sdk';
import Subgallery from './Subgallery';
import Slideshow from '../Slideshow/Slideshow';

const Gallery = (props) => {

  // Has the array of images from S3 to display in gallery
  const [images, setImages] = useState([])
  // True if all images have finished loading for gallery
  const [loading, setLoading] = useState(false);
  // Show the slideshow if true
  const [showSlides, setShowSlides] = useState(false);
  // Set the picture in which the slideshow will start with
  const [slidesArr, setSlidesArr] = useState([]);
  
  useEffect(() => {
    let currentPage = window.location.href;
    let path = currentPage.substring(22, currentPage.length);
    
    retrieveImages(path)

  }, [props.location.pathname]);
  
  const retrieveImages = async (path) => {
    AWS.config.update({
      accessKeyId: config.access,
      secretAccessKey: config.secret,
      region: 'us-west-1'
    })
    await new AWS.S3().listObjectsV2({
      Bucket: 'visualsbydavidhophotos',
      Prefix: path,
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setImages(
          data.Contents.slice(1).map((image) => {
            return `https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/${image.Key}`
          })
        )
      }
    });
  };

  if (showSlides) {
    return (
      <div className={styles.gallery} >
        <div className={styles.slideshowContainer}>
          <span className={styles.goBack} onClick={() => setShowSlides(false)}>Go back</span>
          <Slideshow slidesArr={slidesArr} />
        </div>
      </div>
    )
  } else {
      return (
        <div className={styles.gallery}>
          <div className={styles.sidegallery}>
            <Subgallery 
              images={images} 
              setShowSlides={setShowSlides}
              setSlidesArr={setSlidesArr}
              setLoading={setLoading}
              loading={loading} />
          </div>
        </div>
      )
    }
}

export default Gallery
