import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import GalleryData from './GalleryData';
import config from '../../assets/config';
import AWS from 'aws-sdk';

const Gallery = (props, { mappedImages, title }) => {

  const [imageLength, setImageLength] = useState();
  // console.log(props.mappedImages.match.path);

  const currPage = window.location.href;

  useEffect(() => {
    const retrieveImages = async () => {

      AWS.config.setPromisesDependency();
      AWS.config.update({
        accessKeyId: config.access,
        secretAccessKey: config.secret,
        region: 'us-west-1'
      })
  
      const s3 = new AWS.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'visualsbydavidhophotos',
        Prefix: 'fashion'
      }).promise();
  
      const length = response.Contents.length;
      setImageLength(length);
    };

    retrieveImages();
  }, [])

  return (
    <div className={styles.gallery}>
    
      <div className={styles.header}>{title}</div>

      <div className={styles.sidegallery}>

        {/* <GalleryData /> */}

      </div>
    </div>
  )
}

export default Gallery
