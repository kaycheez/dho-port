import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import config from '../../assets/config';
import AWS from 'aws-sdk';
import Subgallery from './Subgallery';

const Gallery = (props) => {

  const [images, setImages] = useState([])
  
  useEffect(() => {
    let currentPage = window.location.href;
    let path = currentPage.substring(22, currentPage.length);
    
    retrieveImages(path)

  });
  
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


  return (
    <div className={styles.gallery}>

      {/* <div className={styles.header}>{props.title}</div> */}

      <div className={styles.sidegallery}>

          <Subgallery images={images} />

      </div>
    </div>
  )
}

export default Gallery
