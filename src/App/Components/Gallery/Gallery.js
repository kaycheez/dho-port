import React from 'react';
import styles from './Gallery.module.scss';
import GalleryData from './GalleryData';

import fashion from '../../assets/images/fashion.jpg';
import fashion1 from '../../assets/images/1.jpg';
import fashion2 from '../../assets/images/2.jpg';
import fashion3 from '../../assets/images/3.jpg';
import fashion4 from '../../assets/images/4.jpg';
import fashion5 from '../../assets/images/5.jpg';

const Gallery = ({ mappedImages, title }) => {

  const fashionImages = [
    {
      image: fashion4,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion1,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion5,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion5,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion2,
      name: "Fashion",
      path: "/"
    },
    {
      image: fashion3,
      name: "Fashion",
      path: "/"
    },
  ];

  // Local variables
  // const hostPage = 'http://localhost:3001/';
  // const currPage = window.location.href;

  // Switch statement to change data in mappedImages
  // function imageSwitch(currPage) {
  //     switch(currPage) {
  //         case hostPage + 'corporate':
  //             mappedImages = corporateMap;
  //             title = 'Corporate';
  //             break;
  //         case hostPage + 'fashion':
  //             mappedImages = fashionMap;
  //             title = 'Fashion';
  //             break;
  //         case hostPage + 'events':
  //             mappedImages = "Events";
  //             title = 'Events';
  //             break;
  //         case hostPage + 'products':
  //             mappedImages = "Products";
  //             title = 'Products';
  //             break;
  //         default:
  //             return null;
  //     }
  // }

  return (
    <div className={styles.gallery}>

      {/* {imageSwitch(currPage)} */}

      <div className={styles.header}>{title}</div>

      <div className={styles.sidegallery}>

        <GalleryData images={fashionImages} />

      </div>
    </div>
  )
}

export default Gallery
