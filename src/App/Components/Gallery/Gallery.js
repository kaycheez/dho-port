import React from 'react';
import { corporateMap, fashionMap } from './GalleryData';
import styles from './Gallery.module.scss';

export function Gallery () {

    var mappedImages;
    var title;

    // Local variables
    const hostPage = 'http://localhost:3001/';
    const currPage = window.location.href;

    // Switch statement to change data in mappedImages
    function imageSwitch(currPage) {
        switch(currPage) {
            case hostPage + 'corporate':
                mappedImages = corporateMap;
                title = 'Corporate';
                break;
            case hostPage + 'fashion':
                mappedImages = fashionMap;
                title = 'Fashion';
                break;
            case hostPage + 'events':
                mappedImages = "Events";
                title = 'Events';
                break;
            case hostPage + 'products':
                mappedImages = "Products";
                title = 'Products';
                break;
            default:
                return null;
        }
    }

    return (
        <div className={styles.gallery}>
        
            {imageSwitch(currPage)}
            
            <div className={styles.header}>{title}</div>

            <div className={styles.sidegallery}>


                {mappedImages}
                
            </div>
        </div>
    )
}
