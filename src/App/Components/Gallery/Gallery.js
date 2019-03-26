import React from 'react';
import { corporateMap, fashionMap } from './GalleryData';
import styles from './Gallery.module.scss';

export function Gallery () {

    var mappedImages;

    // Local variables
    const hostPage = 'http://localhost:3001/';
    const currPage = window.location.href;

    // Using current URL, will regex to get title of each page
    const regex = new RegExp(hostPage, "g")
    const title = currPage.replace(regex, "")
    const newTitle = title.charAt(0).toUpperCase() + title.slice(1);

    // Switch statement to change data in mappedImages
    function imageSwitch(currPage) {
        switch(currPage) {
            case hostPage + 'corporate':
                mappedImages = corporateMap;
                break;
            case hostPage + 'fashion':
                mappedImages = fashionMap;
                break;
            default:
                return null;
        }
    }

    return (
        <div className={styles.gallery}>

            <div className={styles.header}>{newTitle}</div>

            <div className={styles.sidegallery}>
                {imageSwitch(currPage)}
                {mappedImages}
                
            </div>
        </div>
    )
}
