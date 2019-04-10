import React, { useState, useEffect, useContext } from 'react';
import styles from './Gallery.module.scss';
import config from '../../assets/config';
import AWS from 'aws-sdk';
import Subgallery from './Subgallery';
import Slideshow from '../Slideshow/Slideshow';
import { SlidesContext } from '../../Context/SlidesContext';

const Gallery = (props) => {

  const {showSlides, setShowSlides} = useContext(SlidesContext);

  // Has the array of images from S3 to display in gallery
  const [images, setImages] = useState([]);
  // True if all images have finished loading for gallery
  const [loading, setLoading] = useState(false);
  // Set the picture in which the slideshow will start with
  const [slidesArr, setSlidesArr] = useState([]);

  let currentPage = window.location.href;
  let path = currentPage.substring(22, currentPage.length);

  useEffect(() => {
    retrieveImages(path)
    localStorage.setItem('data', JSON.stringify(images))
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

  // Set showSlides to false, hiding slides, and calls AWS for images again
  const goBack = (path) => {
    setShowSlides(false);
    retrieveImages(path);
  }

  return (
    <div className={styles.gallery}>
      {
        showSlides 
        ? 
          <Slideshow 
            slidesArr={slidesArr} // Pass in the array of images it'll map out
            goBack={goBack}  // This is the back button
            path={path} /> // Path required to fetch images from AWS again
        :
          <Subgallery 
            images={images}  // Array of images for masonry gallery to map
            setSlidesArr={setSlidesArr} // Sets the first image in array for slideshow
            setLoading={setLoading} // Function to set boolean for images loaded
            loading={loading} /> // Component true if all images of finished loading
      }
    </div>
  )

}

export default Gallery
