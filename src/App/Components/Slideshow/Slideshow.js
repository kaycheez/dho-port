import React from 'react';
import styles from './Slideshow.module.scss';
import Slider from 'react-slick';
// import { NextArrow, PrevArrow } from '../Carousel/Arrows';

const Slideshow = (props) => {

  // const nextArrow = () => {
  //   return (
  //     <div className={styles.nextArrow}>
  //       <NextArrow />
  //     </div>
  //   )
  // }

  // const prevArrow = () => {
  //   return (
  //     <div className={styles.prevArrow}>
  //       <PrevArrow />
  //     </div>
  //   )
  // }

  const settings = {
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyload: true,
    // nextArrow: nextArrow(),
    // prevArrow: prevArrow()
  }

  const mapSlides = () => {
    return props.slidesArr.map((image, i) => {
      return (
        <div key={i} className={styles.slideShow}>
          <img
            alt='Slides'
            src={image}
          />
        </div>
      )
    })
  }

  return (
    <div className={styles.slideshowContainer} >
      <button className={styles.goBack} onClick={() => props.goBack(props.path)}>Go back</button>
      
      <Slider {...settings} >
        
        {mapSlides()}
     
      </Slider>

    </div>
  )

}

export default Slideshow;