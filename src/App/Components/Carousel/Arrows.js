import React from 'react';
import styles from './CarouselBackground.module.scss';

export const NextArrow = (props) => {
  return (
    <div {...props} className={`${styles.carousel__arrow} ${styles.carousel__arrowNext}`}>
      <a className={styles.animated_arrow} href='https://google.com'>
        <span className={`${styles.the_arrow} ${styles._left}`}>
          <span className={styles.shaft} />
        </span>
        <span className={styles.main}>
          <span className={styles.text}>
          </span>
          <span className={`${styles.the_arrow} ${styles._right}`}>
            <span className={styles.shaft} />
          </span>
        </span>
      </a>
    </div>
  )
}

export const PrevArrow = (props) => {
  return (
    <div {...props} className={`${styles.carousel__arrow} ${styles.carousel__arrowPrev}`}>
      <a className={styles.animated_arrow} href='https://google.com'>
        <span className={`${styles.the_arrow} ${styles._left}`}>
          <span className={styles.shaft} />
        </span>
        <span className={styles.main}>
          <span className={styles.text}>
          </span>
          <span className={`${styles.the_arrow} ${styles._right}`}>
            <span className={styles.shaft} />
          </span>
        </span>
      </a>
    </div>
  )
}