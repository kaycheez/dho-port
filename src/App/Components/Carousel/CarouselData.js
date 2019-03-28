import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CarouselBackground.module.scss';
import routes from '../../routes/routes';

const CarouselData = (props) => {

  const mapCarousel = (carouselImages) => {
    return carouselImages.map(({ image, title }, i) => {
      return (
        <div className={styles.carousel__image} key={i}>

          <img className={styles.carousel__imageItem} alt={title} src={image} />
          {/* <Link to={path} className={styles.link}/> */}
          <h1 className={styles.carousel__imageCaption}>{title}</h1>
          
        </div>
      )
    })
  }

  return (
    <>
      {mapCarousel(routes)}
    </>
  )


}

export default CarouselData;