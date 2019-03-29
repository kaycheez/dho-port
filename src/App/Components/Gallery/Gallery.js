import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import GalleryData from './GalleryData';
import config from '../../assets/config';
import AWS from 'aws-sdk';

const Gallery = (props, { mappedImages, title }) => {

  // console.log(props)
    // Will get the current path || url with "/" for example, "/corporate, /fashion, etc"
    const currentPath = props.mappedImages.match.path;
    const fetchCategory = currentPath.substring(1, currentPath.length);
    const currPage = window.location.href;

    // Will get the amount of pictures in S3 bucket
    const [imageLength, setImageLength] = useState();


  function imageSwitch(currPage) {
    retrieveImages(fetchCategory);
    title = currentPath.substring(1, 2).toUpperCase() + currentPath.substring(2, currentPath.length);
  }

    const retrieveImages = async (fetchCategory) => {

      AWS.config.setPromisesDependency();
      AWS.config.update({
        accessKeyId: config.access,
        secretAccessKey: config.secret,
        region: 'us-west-1'
      })
  
      const s3 = new AWS.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'visualsbydavidhophotos',
        Prefix: fetchCategory,
      }).promise();
  
      const length = response.Contents.length;
      setImageLength(length - 1);
    };

    console.log(imageLength)
  return (
    <div className={styles.gallery}>

      {imageSwitch(currPage)}
    
      <div className={styles.header}>{title}</div>

      <div className={styles.sidegallery}>

        <GalleryData imageLength={imageLength} fetchCategory={fetchCategory} />

      </div>
    </div>
  )
}

export default Gallery
