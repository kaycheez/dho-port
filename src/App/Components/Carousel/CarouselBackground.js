import React from 'react';
import CarouselData from './CarouselData';
import styles from './CarouselBackground.module.scss';
import { NextArrow, PrevArrow } from './Arrows';
import Slider from 'react-slick';

const CarouselBackground = (props) => {

  // const visibleArrows = props.sidebar ? styles.arrowOut : styles.carousel__arrow;

  const brightness = props.sidebar ? styles.carousel__sidebarOpen : styles.carousel__sidebarClose;

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: props.sidebar ? false : true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }


  return (
    <div className={brightness} id='carousel__Fix'>
      <Slider {...settings}>
        <CarouselData />
      </Slider>
    </div>
  )
}
export default CarouselBackground