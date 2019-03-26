import React from 'react';
import styles from './Gallery.module.scss';

export function Gallery () {

    const hostPage = 'http://localhost:3001/';
    const currPage = window.location.href;

    const regex = new RegExp(hostPage, "g")
    const title = currPage.replace(regex, "")
    const newTitle = title.charAt(0).toUpperCase() + title.slice(1);


    console.log(newTitle);
    


    return (
        <div className={styles.gallery}>

            <div className={styles.header}>{newTitle}</div>

            <div className={styles.subgallery}>
                <div className={styles.child}>1</div>
                <div className={styles.child}>2</div>
                <div className={styles.child}>3</div>
                <div className={styles.child}>4</div>
                <div className={styles.child}>5</div>
                <div className={styles.child}>6</div>
                <div className={styles.child}>1</div>
                <div className={styles.child}>2</div>
                <div className={styles.child}>3</div>
                <div className={styles.child}>4</div>
                <div className={styles.child}>5</div>
                <div className={styles.child}>6</div>
                
            </div>
        </div>
    )
}
