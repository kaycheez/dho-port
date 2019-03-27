import React from 'react';
import styles from './Gallery.module.scss';
import corporate from '../../assets/images/corporate.jpg';
import fashion from '../../assets/images/fashion.jpg';
import fashion1 from '../../assets/images/1.jpg';
import fashion2 from '../../assets/images/2.jpg';
import fashion3 from '../../assets/images/3.jpg';
import fashion4 from '../../assets/images/4.jpg';
import fashion5 from '../../assets/images/5.jpg';

const corporateImages = [
    {
        image: corporate,
        name: "Corporate",
        path: '/'
    },
    {
        image: corporate,
        name: "Corporate",
        path: '/'
    },
    {
        image: corporate,
        name: "Corporate",
        path: '/'
    },
    {
        image: corporate,
        name: "Corporate",
        path: '/'
    },
    {
        image: corporate,
        name: "Corporate",
        path: '/'
    },
];

const fashionImages = [
    {
        image: fashion,
        name: "Fashion",
        path: "/"
    },
    {
        image: fashion1,
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
];

export const corporateMap = corporateImages.map(({image, name, path}, i) => {
    return (
        <div className={styles.sideGalleryItems} key={i}>
            <img alt={name} src={image}/>
            {/* <h1>{name}</h1> */}
        </div>
    )
})

export const fashionMap = fashionImages.map(({image, name, path}, i) => {
    return (
        <div className={styles.sideGalleryItems} key={i}>
            <img alt={name} src={image}/>
            {/* <h1>{name}</h1> */}
        </div>
    )
})