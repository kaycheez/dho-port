import React from 'react';
import {carouselData} from './CarouselData';
import styles from './CarouselBackground.module.scss';
// import styles from './CarouselArrow.module.scss'
import Slider from 'react-slick';

export function CarouselBackground () {

    const NextArrow = (props) => {
        return (
            <div {...props} className={`${styles.carousel__arrow} ${styles.carousel__arrowNext}`}>
                <a className={styles.animated_arrow} href='https://google.com'>
                    <span className={`${styles.the_arrow} ${styles._left}`}>
                        <span className={styles.shaft}/>
                    </span>
                    <span className={styles.main}>
                        <span className={styles.text}>
                            {/* Next */}
                        </span>
                        <span className={`${styles.the_arrow} ${styles._right}`}>
                            <span className={styles.shaft}/>
                        </span>
                    </span>
                </a>
            </div>  
        )
    }

    const PrevArrow = (props) => {
        return (
            <div {...props} className={`${styles.carousel__arrow} ${styles.carousel__arrowPrev}`}>
                <a className={styles.animated_arrow} href='https://google.com'>
                    <span className={`${styles.the_arrow} ${styles._left}`}>
                        <span className={styles.shaft}/>
                    </span>
                    <span className={styles.main}>
                        <span className={styles.text}>
                            {/* Previous */}
                        </span>
                        <span className={`${styles.the_arrow} ${styles._right}`}>
                            <span className={styles.shaft}/>
                        </span>
                    </span>
                </a>
            </div>
        )
    }

    const settings = {      
        // fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4700,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div className='carousel__container'>
            <Slider {...settings}>
                {carouselData}
            </Slider>
        </div>
    )
}