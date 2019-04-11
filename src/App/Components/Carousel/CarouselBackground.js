import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './CarouselBackground.module.scss';
import routes from '../../routes/routes';
import { NextArrow, PrevArrow } from './Arrows';
import Slider from 'react-slick';
import { SlidesContext } from '../../Context/SlidesContext';

const CarouselBackground = () => {

  const { showSidebar } = useContext(SlidesContext);

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !showSidebar,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const brightness = showSidebar ? styles.carousel__sidebarOpen : styles.carousel__sidebarClose;

  const mappedImages = () => {
    return routes.map(({title, path, image}, i) => {
      return (
        <div className={styles.carousel__image} key={i}>

          <img className={styles.carousel__imageItem} alt={title} src={image} />
          <Link to={path} className={styles.link} />
          <h1 className={styles.carousel__imageCaption}>{title}</h1>
  
        </div>
      )
    })
  }

  return (
    <div className={brightness} id='carousel__Fix'>
      <Slider {...settings} >
        {mappedImages()}
      </Slider>
    </div>
  )
}
export default CarouselBackground