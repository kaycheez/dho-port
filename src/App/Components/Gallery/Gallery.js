import React, { useState } from 'react';
import styles from './Gallery.module.scss';

export function Gallery () {

    const currPage = 'http://localhost:3001/'
    


    return (
        <div className={styles.gallery}>
            <div className={styles.grid}>
                <div className={styles.child}></div>
            </div>
        </div>
    )
}
