import React from 'react';
import styles from './Gallery.module.scss';
import corporate from '../../assets/images/corporate.jpg';
import fashion from '../../assets/images/fashion.jpg';

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
        image: fashion,
        name: "Fashion",
        path: "/"
    },
    {
        image: fashion,
        name: "Fashion",
        path: "/"
    },
    {
        image: fashion,
        name: "Fashion",
        path: "/"
    },
    {
        image: fashion,
        name: "Fashion",
        path: "/"
    },
    {
        image: fashion,
        name: "Fashion",
        path: "/"
    },
];

export const corporateMap = corporateImages.map(({image, name, path}, i) => {
    return (
        <div className={styles.sideGalleryItems} key={i}>
            <img alt={name} src={image}/>
            <h1>{name}</h1>
        </div>
    )
})

export const fashionMap = fashionImages.map(({image, name, path}, i) => {
    return (
        <div className={styles.sideGalleryItems} key={i}>
            <img alt={name} src={image}/>
            <h1>{name}</h1>
        </div>
    )
})