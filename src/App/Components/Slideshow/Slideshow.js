import React, { useContext } from 'react';
import styles from './Slideshow.module.scss';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './SlideshowArrows.js';
import { SlidesContext } from '../../Context/SlidesContext';

const Slideshow = (props) => {

  const { path } = useContext(SlidesContext);

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
      <h3 className={styles.goBack} onClick={() => props.goBackToGallery(path)}>Go back</h3>
      
      <Slider {...settings} >
        
        {mapSlides()}
     
      </Slider>

    </div>
  )

}

export default Slideshow;