import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import GalleryData from './GalleryData';
import config from '../../assets/config';
import AWS from 'aws-sdk';

const Gallery = (props, { mappedImages, title }) => {

  // const currPage = window.location.href;
  
  // Will get the current path || url with "/" for example, "/corporate, /fashion, etc"
  const currentPath = props.mappedImages.match.path;

  // Will get the amount of pictures in S3 bucket
  const [imageLength, setImageLength] = useState();

  // Will get the current path || url. For example, "corporate, fashion, etc"
  const [fetchCategory, setFetchCategory] = useState(currentPath.substring(1, currentPath.length));

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
        Prefix: fetchCategory
      }).promise();
  
      const length = response.Contents.length;
      setImageLength(length - 1);
    };

    retrieveImages();
  }, [fetchCategory])

  console.log(imageLength);

  return (
    <div className={styles.gallery}>
    
      <div className={styles.header}>{title}</div>

      <div className={styles.sidegallery}>

        <GalleryData imageLength={imageLength} fetchCategory={fetchCategory} />

      </div>
    </div>
  )
}

export default Gallery
