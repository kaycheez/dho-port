import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import config from '../../assets/config';
import AWS from 'aws-sdk';
import Subgallery from './Subgallery';
import Slideshow from '../Slideshow/Slideshow';

const Gallery = (props) => {

  const [showSlides, setShowSlides] = useState(false);
  // Has the array of images from S3 to display in gallery
  const [images, setImages] = useState([]);
  // True if all images have finished loading for gallery
  const [loading, setLoading] = useState(false);
  // Set the picture in which the slideshow will start with
  const [slidesArr, setSlidesArr] = useState([]);
  // Style is unmounted (opacity: 0) and remains until all pictures have loaded up
  // Will go back to style unmounted (opacity: 0) again in useEffect's cleanup when component unmounts
  const [hide, setHiding] = useState(styles.hide);

  const currentPage = props.location.pathname;
  const path = currentPage.substring(1, currentPage.length);

  useEffect(() => {
    retrieveImages(path)
    setShowSlides(false);

    return () => {
      console.log('Component is going to unmount');
      setHiding(styles.hide);
    }
  }, [props.location.pathname]);

  const retrieveImages = async (path) => {

    // const currPathname = props.location.pathname;

    // if (currPathname === props.location.pathname) {

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
    // }
  };

  const goBackToGallery = (path) => {
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
            goBackToGallery={goBackToGallery} 
            path={path} />
        :
          <Subgallery 
            images={images}  // Array of images for masonry gallery to map
            setSlidesArr={setSlidesArr} // Sets the first image in array for slideshow
            setLoading={setLoading} // Function to set boolean for images loaded
            loading={loading} // Component true if all images of finished loading
            setShowSlides={setShowSlides}
            hide={hide}
            setHiding={setHiding} />
      }
    </div>
  )

}

export default Gallery
