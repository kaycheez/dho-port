import React from 'react';
import styles from './Slideshow.module.scss';

export const NextArrow = (props) => {
  return (
    <div {...props} className={styles.arrowNext} >
      <div class={styles.arrow}>
        <div class={styles.top}></div>
        <div class={styles.bottom}></div>
      </div>
    </div>
  )
}

export const PrevArrow = (props) => {
  return (
    <div {...props} className={styles.arrowPrev}>
      <div class={styles.arrow}>
        <div class={styles.top}></div>
        <div class={styles.bottom}></div>
      </div>
    </div>
  )
}